import React from 'react';

import logoImg from '../../assets/logo.svg';
import { Link } from 'react-router-dom';
import { FiPower } from 'react-icons/fi';

export default function Profile(props) {
    return (
        <div className="profile container">
 
            <header>
                <img src={logoImg} alt="Be the Hero" />
                <span>Bem vinda, APAD</span>

                <Link className="button" to="/incidents/new"> Cadastrar novo caso</Link>
                <button type="button"></button>
                <FiPower size={18} color="#E02041" />
            </header>
        </div>
    );
}