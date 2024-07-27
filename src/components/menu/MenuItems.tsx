
import React from 'react';
import { generateKey } from '../../utils/code';

// Definir la interfaz MenuItemsType
interface MenuItemsType {
    label: string;
    to: string;
    items: MenuItemsType[];
}

// Definir las propiedades del componente MenuItems
export interface MenuItemsProps {
    items: MenuItemsType[];
}

const MenuItems: React.FC<MenuItemsProps> = ({ items }) => {


    const _buildLabel = (label: string) => {
        const key = generateKey();
        return (
            <>
                <input className="dropdown" type="checkbox" id={`dropdown-${key}`} name="dropdown" />
                <label className="for-dropdown" htmlFor={`dropdown-${key}`}>
                    {label}
                </label>
            </>
        );
    };

    const _buildOption = (option: MenuItemsType) => {

        return option.items.length > 0 ? _buildSubItem(option.label, option.items) : <a className='a'>{option.label}</a>

        //option.items.length > 0 ? _buildSubItem(option.label, option.items) : <a key={subIndex} >{option.label}</a>
    }

    // Método para construir los elementos del menú
    const _buildItem = (items: MenuItemsType[]) => {
        return (
            <ul className="menu-inner">
                {items.map((item, index) => (
                    <li key={index} className="menu-item">
                        <div className="sec-center">
                            {_buildLabel(item.label)}
                            <div className="section-dropdown">
                                {item.items.map((option) => _buildOption(option))}
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        );
    };

    const _buildSubItem = (label: string, items: MenuItemsType[]) => {
        console.log("SUB", label, items);
        const key = generateKey();
        return <a className="for-dropdown a" >
            <input className="dropdown" type="checkbox" id={`dropdown-${key}`} name={`dropdown-${key}`} />
            <label className='sub-label' htmlFor={`dropdown-${key}`}>{label} </label>
            <div className="section-dropdown">
                {items.map((option) => _buildOption(option))}
            </div>
        </a>
    }


    // Renderizar los elementos del menú
    return (
        <ul>
            {_buildItem(items)}
        </ul>
    );
}

export default MenuItems;
