// Global Import
import { Droppable } from "react-beautiful-dnd";
import { useParams, Link } from "react-router-dom";

// Local Import
import Backlog from "./Backlog/Backlog";
import Done from "./Done/Done";
import Inprogress from "./Inprogress/Inprogress";
import Todo from "./Todo/Todo";

export default function Tasks() {
    const { name } = useParams();
    return (
        <Droppable droppableId='customList'>
            {(provider) => (
                <>
                    <div className='header'>
                        <h1>Rast Mobile Kanbanboard</h1>
                        <h3>
                            Hoşgeldiniz <span>{name}</span>
                        </h3>
                        <Link to='/'> Çıkış yap </Link>
                    </div>
                    <div
                        className='board'
                        {...provider.droppableProps}
                        ref={provider.innerRef}
                    >
                        <div className='tasks'>
                            <Backlog />

                            {provider.placeholder}
                        </div>
                        <div className='tasks'>
                            <Inprogress />

                            {provider.placeholder}
                        </div>
                        <div className='tasks'>
                            <Todo />

                            {provider.placeholder}
                        </div>
                        <div className='tasks'>
                            <Done />

                            {provider.placeholder}
                        </div>
                    </div>
                </>
            )}
        </Droppable>
    );
}
