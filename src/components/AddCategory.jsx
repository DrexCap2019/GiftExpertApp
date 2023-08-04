import {useState} from "react";

// eslint-disable-next-line react/prop-types
export const AddCategory = ({ onNewCategorie }) => {

    const [inputValue, setInputValue] = useState('One Punch');

    const onInputChange = ({ target }) => {
        setInputValue(target.value);
    }

    const handlerSubmit = (e) => {
        e.preventDefault();
        if(inputValue.trim().length <= 1) return;
        // setCategories(categories => [inputValue, ...categories]);
        setInputValue('');
        onNewCategorie(inputValue.trim());
    }

    return (
        <form onSubmit={ handlerSubmit }>
            <input
                type="text"
                placeholder="Buscar Gifs"
                value={inputValue}
                onChange={ onInputChange }
            />
        </form>
    )
}