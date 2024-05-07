import React, { useCallback } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  height: 100%;
  border: 1px dashed gray;
  background-color: #f5f5f5;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
`;

interface IFileDragAndDropProps {
  onFileSelected: (file: File) => void;
}

const FileDragAndDrop: React.FC<IFileDragAndDropProps> = ({onFileSelected}) => {

  const handleFileDrop = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    console.log('rjfrehgierhgihrgeihi')
    const droppedFile = e.dataTransfer.files[0];
    if(droppedFile){
      onFileSelected(droppedFile);
    }
  },[onFileSelected]);

  return (
    <Container onDrop={handleFileDrop} onDragOver={(e) => e.preventDefault()}>
      Drag and Drop file here.
    </Container>
  )
}

export default FileDragAndDrop
