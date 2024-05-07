import styled from "styled-components"
import { Container } from "../components/CommonStyles"
import FileDragAndDrop from "../components/FileDragAndDrop";
import InputField from "../components/InputField";
import Button from "../components/Button";
import { useCallback, useState } from "react";
import { IAddNewBookPayload } from "../interface";
import { addNewBook } from "../services/bookService";
import { useNavigate } from "react-router-dom";
// import axios from "axios";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
  min-width: 750px;
  background-color: #f0f1f3;
  padding: 20px;
  gap: 20px;
  >button{
    width: 150px;
  }
`;

const ImageContainer = styled.div`
  height: 350px;
  width: 100%;
`; 

const BookDetailsWrapper = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px; 
  column-gap: 30px;
`; 

const SelectedImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  aspect-ratio: 3/2;
`;

interface IBookDetailType {
  title: string;
  abbreviation: string;
  amount: number;
  city: string;
}

const Sale = () => {
  const [imageFile, setImageFile] = useState<string>('');
  const [bookDetails, setBookDetails] = useState<IBookDetailType>({title: '', abbreviation: '', amount: 0, city: ''});
  const navigate = useNavigate();
  // const [cloudinaryId, setCloudinaryId] = useState<string>('');
  // const [imageUrl, setImageUrl] = useState<string>('');

  const onFileSelected = useCallback((file: File) => {
    // setImageFile(file);
    if (file) {
      const reader = new FileReader();
      reader.onload = (event: ProgressEvent<FileReader>) => {
        if(event.target){
          setImageFile(event.target.result as string);
        }
      };
      reader.readAsDataURL(file);
    }
  },[]);

  const uploadBookDetails = useCallback( async(imageUrl: string, cloudinaryId: string) => {

    const payload: IAddNewBookPayload = {
      title: bookDetails.title,
      abbreviation: bookDetails.abbreviation,
      city: bookDetails.city,
      amount: bookDetails.amount,
      image: imageUrl,
      cloudinaryId: cloudinaryId,
    }
    try{
      const res = await addNewBook({...payload});
      if(res.status === 200){
        navigate('/');
      }
      console.log(res, 'AddNewBook');
    }catch(err){
      console.log(err);
    }
  },[bookDetails, navigate]); 

  const handleAddBook = useCallback(async() => {
    if(!imageFile){
      console.log('Please select Image File')
    }
    const data = new FormData();
    data.append('file', imageFile);
    data.append("upload_preset","book-swap")
    data.append("cloud_name",import.meta.env.VITE_CLOUDINARY_CLOUD_NAME);

    fetch(`https://api.cloudinary.com/v1_1/${import.meta.env.VITE_CLOUDINARY_CLOUD_NAME}/image/upload`,
    {
      method:"post",
      body:data
    })
    .then(res=>res.json())
    .then(data=>{
        uploadBookDetails(data.url, data.public_id)
    })
    .catch(err=>{
        console.log(err);
    })
  }, [imageFile, uploadBookDetails]);

  return (
    <Container>
      <Wrapper>
        <ImageContainer>
          {imageFile ? <SelectedImage src={imageFile} /> : <FileDragAndDrop onFileSelected={onFileSelected} />}
        </ImageContainer>
        <BookDetailsWrapper>
          <InputField label="Title" value={bookDetails.title} onChange={(e) => setBookDetails(prev => ({...prev, title: e.target.value}))} />
          <InputField label="Abbrevation" value={bookDetails.abbreviation} onChange={(e) => setBookDetails(prev => ({...prev, abbreviation: e.target.value}))} />
          <InputField type="number" label="Amount" value={bookDetails.amount} onChange={(e) => setBookDetails(prev => ({...prev, amount: parseInt(e.target.value)}))} />
          <InputField label="City" value={bookDetails.city} onChange={(e) => setBookDetails(prev => ({...prev, city: e.target.value}))} />
        </BookDetailsWrapper>
        <Button onClick={handleAddBook}>Submit</Button>
      </Wrapper>
    </Container>
  )
}

export default Sale
