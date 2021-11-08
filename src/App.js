import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
      hasTrunfo: false,
      isSaveButtonDisabled: true,
    };
    this.onInputChange = this.onInputChange.bind(this);
  }

  // React não permite fazer comparação com números, então tivemos que guardar o número em uma variável
  onInputChange({ target: { id, value, type, checked } }) {
    value = type === 'checkbox' ? checked : value;
    this.setState({ [id]: value }, () => {
      const { cardAttr1, cardAttr2, cardAttr3 } = this.state;
      const values = Object.values(this.state);
      const magicNumber = 90;
      const magicNumber2 = 210;
      const soma = Number(cardAttr1) + Number(cardAttr2) + Number(cardAttr3);
      if (values.some((data) => data === '' || data > magicNumber || data < 0)) {
        this.setState({ isSaveButtonDisabled: true });
      } else if (soma > magicNumber2) {
        this.setState({ isSaveButtonDisabled: true });
      } else {
        this.setState({ isSaveButtonDisabled: false });
      }
    });
  }

  // onSaveButtonClick(event) {
  //   event.preventDefault();
  // }

  onSaveButtonClick = (event) => {
    event.preventDefault();
    console.log('passei no onbutton click');
  }

  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      hasTrunfo,
      isSaveButtonDisabled } = this.state;
    return (
      <div>
        <h1>Tryunfo</h1>
        <Form
          isSaveButtonDisabled={ isSaveButtonDisabled }
          onInputChange={ this.onInputChange }
          onSaveButtonClick={ this.onSaveButtonClick }
        />
        <Card
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
          hasTrunfo={ hasTrunfo }
        />
      </div>
    );
  }
}

export default App;
