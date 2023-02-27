import React, {useEffect} from 'react'
import s from './HW12.module.css'
import s2 from '../../s1-main/App.module.css'
import SuperSelect from '../hw07/common/c5-SuperSelect/SuperSelect'
import {useDispatch, useSelector} from 'react-redux'
import {ActionType, changeThemeId} from './bll/themeReducer'
import {AppStoreType} from "../hw10/bll/store";
import {Dispatch} from "redux";

/*
* 1 - в файле themeReducer.ts написать нужные типы вместо any, дописать редьюсер
* 2 - получить themeId из редакса
* 3 - дописать тип и логику функции change
* 4 - передать пропсы в SuperSelect
* */

const themes = [
    {id: 1, value: 'light'},
    {id: 2, value: 'blue'},
    {id: 3, value: 'dark'},
]

const HW12 = () => {
    const dispatch = useDispatch<Dispatch<ActionType>>();
    // взять ид темы из редакса
    const themeId = useSelector<AppStoreType, number>(state => state.theme.themeId) /*1*/

    const change = (id: number /*any*/) => { // дописать функцию
        dispatch(changeThemeId(id))
    }

    useEffect(() => {
        document.documentElement.dataset.theme = themeId + ''
    }, [themeId])

    return (
        <div id={'hw12'}>
            <div id={'hw12-text'} className={s2.hwTitle}>
                Homework #12
            </div>

            <div className={s2.hw}>
                <SuperSelect
                    id={'hw12-select-theme'}
                    className={s.select}
                    // сделать переключение тем

                    onChangeOption={change} //(e) => change(e.target.id)
                    options={themes}

                />
            </div>
        </div>
    )
}

export default HW12