import React from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';


const Kanban = () => {
  const [tasks, setTasks] = React.useState({
    todo: [{ id: '1', content: 'Task 1' }, { id: '2', content: 'Task 2' }],
    inProgress: [{ id: '3', content: 'Task 3' }],
    done: [{ id: '4', content: 'Task 4' }],
  });

  const onDragEnd = (result) => {
    if (!result.destination) return;

    const source = result.source;
    const destination = result.destination;

    const sourceClone = Array.from(tasks[source.droppableId]);
    const destClone = Array.from(tasks[destination.droppableId]);
    const [removed] = sourceClone.splice(source.index, 1);
    destClone.splice(destination.index, 0, removed);

    setTasks({
      ...tasks,
      [source.droppableId]: sourceClone,
      [destination.droppableId]: destClone,
    });
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div style={{ display: 'flex' }}>
        {Object.keys(tasks).map((key, index) => (
          <Droppable droppableId={key} key={key}>
            {(provided) => (
              <div
                ref={provided.innerRef}
                {...provided.droppableProps}
                style={{
                  margin: '0 8px',
                  padding: '8px',
                  width: '200px',
                  backgroundColor: '#f0f0f0',
                  minHeight: '500px',
                }}
              >
                <h3>{key}</h3>
                {tasks[key].map((task, index) => (
                  <Draggable key={task.id} draggableId={task.id} index={index}>
                    {(provided) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        style={{
                          userSelect: 'none',
                          padding: '8px',
                          margin: '0 0 8px 0',
                          minHeight: '50px',
                          backgroundColor: '#ff0f',
                          color: '#333',
                          ...provided.draggableProps.style,
                        }}
                      >
                        {task.content}
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        ))}
      </div>
    </DragDropContext>
  );
}

export default Kanban;
