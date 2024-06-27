import React, {useEffect, useState} from 'react';
import './Form.css';
import {useTelegram} from "../../hooks/useTelegram";
const Form = () => {
    const [country, setCountry] = useState('');
    const [city, setCity] = useState("");
    const [street, setStreet] = useState('');
    const {tg} = useTelegram();

    useEffect(() => {
        tg.MainButton.setParams({
            text: 'Отправить данные'
        })
    }, []);

    useEffect(() => {
        if (!street || !country || !city) {
            tg.MainButton.hide();
        }else {
            tg.MainButton.show();
        }
    }, [country, city, street]);

    const onChangeCountry = (e) => {
        setCountry(e.target.value)
    }

    const onChangeCity = (e) => {
        setCity(e.target.value)
    }

    const onChangeStreet = (e) => {
        setStreet(e.target.value)
    }

    return (
        <div className={"form"}>
            <h3>Введите ваши данные</h3>
            <input className={'input'} type="text" placeholder={'Страна'} value={country} onChange={onChangeCountry}/>
            <input className={'input'} type="text" placeholder={'Город'} value={city} onChange={onChangeCity}/>
            <input className={'input'} type="text" placeholder={'Улица'} value={street} onChange={onChangeStreet}/>
        </div>
    );
};

export default Form;