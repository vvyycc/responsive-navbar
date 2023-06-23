import { Button } from "primereact/button";
import { FileUpload } from "primereact/fileupload";
import { InputText } from "primereact/inputtext";
import { InputTextarea } from "primereact/inputtextarea";
import { useState } from "react";
import { useRouter } from 'next/router'


const CreateCard= () => {
    const [image, setImage] = useState(null);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [cards, setCards] = useState([]);
    const router = useRouter();
    const handleImageUpload = (event) => {
        const file = event.files[0];
        const reader = new FileReader();
        reader.onload = () => {
          setImage(reader.result);
        };
        reader.readAsDataURL(file);
      };
    
      const handleSaveCard = () => {
        debugger;
        const newCard = {
          image,
          title,
          description,
        };
        // this set card, show the item of the database put the object cards the attribute to empty
        setCards([...cards, newCard]);
        setImage(null);
        setTitle('');
        setDescription('');
        router.push({
            pathname: '/',
            query: { card: newCard},
          })
      };
return (
    <>
    <div className="grid">
      <h1 className="field mt-7 mb-7 col-offset-5">Create Card</h1><br />

      <div className="field col-offset-1 col-5">
        <FileUpload
          name="demo[]"
          multiple accept="image/*"
          maxFileSize={1000000}
          emptyTemplate={<p className="m-0">Drag and drop files to here to upload.</p>}
          onSelect={handleImageUpload} />

      </div>
      <div className="field col-5">
        <label htmlFor="title">Title</label>
        <InputText id="title" type="text" onChange={(event) => setTitle(event.target.value)} className="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full" />
      </div>
      <div className="field col-offset-1 col-10">
        <label htmlFor="description">Description</label>
        <InputTextarea
          id="description"
          className="p-inputtextarea w-full"
          rows="5"
          placeholder="Description"
          value={description}
          onChange={(event) => setDescription(event.target.value)} />
      </div>


    </div>
    <Button className="field col-offset-6" label="Save" onClick={handleSaveCard} /></>

)
}
export default CreateCard;