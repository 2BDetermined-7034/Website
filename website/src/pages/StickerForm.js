import React from 'react';
import { GoogleSpreadsheet } from 'google-spreadsheet';
import creds from '../artifacts/stickers-381803-e99b412387fa.json';

const doc = new GoogleSpreadsheet('1Btj39JO21hdNKuoRfXj-hMIXCvG9tEuJZ4_7bkmHgDs');

const data = [
    { text: "What is your team number and name?" },
    { text: "What is your Discord Tag so we can contact you for pickup (i.e Nek#0887)"},
    { text: "How many of this variant do you want to purchase? ", imageUrl: "https://media.discordapp.net/attachments/953754034630717454/1089656361853390898/image.png" },
    { text: "How many of this variant do you want to purchase? Limited to 5/person", imageUrl: "https://media.discordapp.net/attachments/953754034630717454/1089656676359077918/image.png" },
    { text: "How many of this variant do you want to purchase? ", imageUrl: "https://media.discordapp.net/attachments/953754034630717454/1089656935600631879/image.png" },
    { text: "How many of this variant do you want to purchase? ", imageUrl: "https://media.discordapp.net/attachments/953754034630717454/1089657095596544040/image.png" },
    { text: "How many of this variant do you want to purchase? ", imageUrl: "https://media.discordapp.net/attachments/953754034630717454/1089657277625159780/image.png" },
    { text: "How many of this variant do you want to purchase? ", imageUrl: "https://media.discordapp.net/attachments/953754034630717454/1089657463831265330/image.png" },
    { text: "How many of this variant do you want to purchase? ", imageUrl: "https://media.discordapp.net/attachments/953754034630717454/1089657632110944377/image.png" },
    { text: "How many of this variant do you want to purchase? ", imageUrl: "https://media.discordapp.net/attachments/953754034630717454/1089657780715126876/image.png" },
    {text: "Are you going to be at DCMP?"},
    {text: "Any questions or concerns? Such as shipping, payment, etc."}
];

class StickerForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            inputs: ["Not delivered or paid", ...Array(data.length).fill('')],
        };
    }

    handleInputChange(index, event) {
        const newInputs = [...this.state.inputs];
        newInputs[index] = event.target.value;
        this.setState({inputs: newInputs});
    }

    async handleSubmit(event) {
        event.preventDefault();
        if (this.state.inputs.slice(1).some((input) => !input)) {
            alert('Please fill in all the fields including the dropdown menu, you can put 0 or N/A for empty fields.');
            return;
        }
        try {
            await doc.useServiceAccountAuth(creds);
            await doc.loadInfo();
            const sheet = doc.sheetsByIndex[0];
            await sheet.addRow(this.state.inputs);

            alert('Your order has been submitted! You will be contacted by a member of the team to arrange payment and pickup.');

            await fetch("https://discordapp.com/api/webhooks/1089663073347977286/3yPU_A6b7202vwqClWP5SQPGjHNGobB8OQAn4P7MzvRfBNWjW_XUoC_MQsfeJ3hhiXBt", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({content: `A new sticker order has been submitted from **${this.state.inputs[1].toString()}**`,}),
            });
        } catch (e) {
            console.error('Error: ', e);
        }
    }

    render() {
        return (
            <div>
                <h1 style={{ fontFamily: 'Ethnocentric', fontWeight: 'bold', textAlign: 'center', color: 'white' }}>Sticker Order Form</h1>
                <h2 style={{ fontFamily: "Ethnocentric", textAlign: 'center', color: 'white', fontSize: "small" }}>
                    All stickers are $3/each, all proceeds go to team 7034. We currently accept Zelle, check, or cash payments.
                </h2>
                <h2 style={{ fontFamily: "Ethnocentric", textAlign: 'center', color: 'white', fontSize: "small" }}>
                    You'll be contacted by a member of the team to arrange payment and pickup. Any questions? Dm Nek#0887 on Discord.
                </h2>


            <form
                onSubmit={this.handleSubmit.bind(this)}
                style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
            >
                {data.map((item, index) => (
                    <div key={index} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <label>{item.text}</label>
                        {item.imageUrl && <img src={item.imageUrl} alt="" />}
                        {index === data.length - 2 ? (
                            <select
                                value={this.state.inputs[index + 1]}
                                onChange={this.handleInputChange.bind(this, index + 1)}
                                style={{ borderRadius: '5px' }}
                            >
                                <option value="Select">Select</option>
                                <option value="Yes">Yes</option>
                                <option value="No">No</option>
                                <option value="Maybe">Maybe</option>
                            </select>
                        ) : (
                            <input
                                type="text"
                                value={this.state.inputs[index + 1]}
                                onChange={this.handleInputChange.bind(this, index + 1)}
                                style={{ borderRadius: '5px' }}
                            />
                        )}
                    </div>
                ))}
                <button
                    type="submit"
                    style={{
                        backgroundColor: 'green',
                        color: 'white',
                        borderRadius: '5px',
                        padding: '10px 20px',
                        fontSize: '18px',
                    }}
                >
                    Submit
                </button>
            </form>
            </div>
        );
    }
}

export default StickerForm;