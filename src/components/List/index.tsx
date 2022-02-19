import React, {useState} from 'react';

import {ReactComponent as TrashIcon} from "../../assets/icons/trash.svg";
import {ICategory} from '../../shared/models/Category';

import './style.scss';
import Modal from '../Modal';

interface Props {
    categories: ICategory[],
    onRemove: (id: number) => void,
}

const List = ({
                  categories,
                  onRemove,
              }: Props) => {
    const [confirmModal, setConfirmModal] = useState<boolean>(false);
    const [activeId, setActiveId] = useState<number>();


    const handleRemoveClick = (id: number) => {
        setActiveId(id);
        setConfirmModal(true);
    };

    const handleConfirmRemove = () => {
        if (activeId === 0 || activeId) {
            onRemove(activeId);
        }
        setConfirmModal(false);
    };

    return (
        <div className="app-list">
            {
                categories && categories.length > 0 && categories.map((category: ICategory, index: number) => (
                    <div key={index} className="list-item">
                        <p>
                            {category.label}
                        </p>
                        <button className="icon-button" onClick={() => handleRemoveClick(category.id)}>
                            <TrashIcon width={14} height={14}/>
                        </button>
                    </div>
                ))
            }

            {
                confirmModal && (
                    <Modal onCancel={() => setConfirmModal(false)} onConfirm={handleConfirmRemove}>
                        <p>
                            {
                                `Are you sure to remove ${
                                    categories.find((category) => category && category.id === activeId)?.label
                                } category?`
                            }
                        </p>
                    </Modal>
                )
            }
        </div>
    )
};

export default List;
