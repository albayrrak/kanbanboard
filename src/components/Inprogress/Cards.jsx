import { useState } from "react";
import { Draggable } from "react-beautiful-dnd";
import { useDispatch, useSelector } from "react-redux";
import { addInp } from "../../features/taskSlice";

export default function Cards() {
    let cards = useSelector((state) => state.task.inprogress.cards); // Reduxtan gelen backlog state
    cards = JSON.parse(localStorage.getItem("Inprogress"));

    return (
        <>
            {cards?.map((card, index) => (
                <Draggable
                    key={card.id}
                    draggableId={card.id.toString()}
                    index={index}
                >
                    {(provider) => (
                        <div
                            ref={provider.innerRef}
                            {...provider.draggableProps}
                            {...provider.dragHandleProps}
                            className='cards'
                        >
                            <div
                                className='cards__content'
                                style={{
                                    background:
                                        (card.status === "Red Color" &&
                                            "#d93535") ||
                                        (card.status === "Green Color" &&
                                            "#00a88b") ||
                                        (card.status === "Pink Color" &&
                                            "#c340a1") ||
                                        (card.status === "Purple Color" &&
                                            "#6a6dcd") ||
                                        (card.status === "Blue Color" &&
                                            "#307fe2"),
                                }}
                            >
                                <h4>{card.title}</h4>
                                <p>{card.desc}</p>
                            </div>
                        </div>
                    )}
                </Draggable>
            ))}
            <AddCardsComponent />
        </>
    );
}

/********  Card Add Componenti ********/

const AddCardsComponent = () => {
    const [title, setTitle] = useState(""); // ??nputtan gelen bilgiyi tutan state
    const [desc, setDesc] = useState(""); // ??nputtan gelen bilgiyi tutan state
    const [status, setStatus] = useState(""); // ??nputtan gelen bilgiyi tutan state
    const [descShow, setDescShow] = useState(false); // Toggle methodunu tutan state
    const dispatch = useDispatch();

    /* Toggle Fonksiyonu */
    const onToggle = (e) => {
        e.preventDefault();
        setDescShow(!descShow);
    };
    /* Toggle Fonksiyonu */

    /* ??nput Handle Aksiyonlar?? */
    const handleTitle = (e) => {
        setTitle(e.currentTarget.value);
    };
    const handleDesc = (e) => {
        setDesc(e.currentTarget.value);
    };
    const handleStatus = (e) => {
        setStatus(e.currentTarget.value);
        console.log(status);
    };
    /* ??nput Handle Aksiyonlar?? */

    /* Reduxtan gelen action dispatch edildi??i yer*/
    const save = (e) => {
        e.preventDefault();
        dispatch(
            addInp({
                title: title,
                desc: desc,
                status: status,
            })
        );
        setTitle("");
        setDesc("");
    };
    /* Reduxtan gelen action dispatch edildi??i yer*/

    return (
        <div className='add__cards'>
            <div className='inputs'>
                <input
                    type='text'
                    placeholder='Bir ??eyler eklemek i??in t??klay??n'
                    value={title}
                    onChange={handleTitle}
                />
                <button onClick={onToggle}>
                    <i
                        class={
                            descShow
                                ? "fas fa-chevron-circle-down active"
                                : " fas fa-chevron-circle-down"
                        }
                    ></i>
                </button>
            </div>
            <div className={descShow ? "add__desc active" : "add__desc"}>
                <textarea value={desc} onChange={handleDesc}></textarea>
                <select value={status} onChange={handleStatus}>
                    <option>Pink Color</option>
                    <option>Purple Color</option>
                    <option>Red Color</option>
                    <option>Green Color</option>
                    <option>Blue Color</option>
                </select>
                <button onClick={save}>G??nder</button>
            </div>
        </div>
    );
};

/********  Card Add Componenti ********/
