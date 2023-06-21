import ItemCard from "./ItemCard";
import React, { useState } from 'react';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { InputTextarea } from 'primereact/inputtextarea';
import { FileUpload } from 'primereact/fileupload';
import { Dropdown } from 'primereact/dropdown';

function ListCard() {
  const [showForm, setShowForm] = useState(false);
  const [image, setImage] = useState(null);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [cards, setCards] = useState([]);
  const [dropdownItem, setDropdownItem] = useState(null);
  const [dropdownItems, setDropdownItems] = useState([
    { name: 'Item 1' },
    { name: 'Item 2' },
    { name: 'Item 3' },
  ]);

  const handleCreateCard = () => {
    setShowForm(true);
  };

  const handleImageUpload = (event) => {
    const file = event.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      setImage(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const handleSaveCard = () => {
    const newCard = {
      image,
      title,
      description,
    };
    setCards([...cards, newCard]);
    setImage(null);
    setTitle('');
    setDescription('');
    setShowForm(false);
  };

  return (
    <div>
      {!showForm && (
        <Button label="Create Card" onClick={handleCreateCard} />
      )}

      {showForm && (
        <div>
          <h3>Create Card</h3>
          <FileUpload
            name="demo[]"
            chooseLabel="Select Image"
            uploadLabel="Save"
            cancelLabel="Cancel"
            customUpload={true}
            accept="image/*"
            maxFileSize={1000000}
            onSelect={handleImageUpload}
          />
          <br />

          <br />
          <div className="col-12">
            <div className="card">
              <h5>Advanced</h5>
              <div className="p-fluid formgrid grid">
                <div className="field col-3 md:col-6">
                  <label htmlFor="firstname2">Firstname</label>
                  <InputText id="firstname2" type="text" />
                </div>
                <div className="field col-6 md:col-6">
                  <label htmlFor="lastname2">Lastname</label>
                  <InputText id="lastname2" type="text" className="p-inputtext" />
                </div>
                <div className="field col-6 md:col-6">
                  <label htmlFor="address">Address</label>
                  <InputTextarea id="address" rows={5} className="p-inputtextarea" />
                </div>
                <div className="field col-6 md:col-6">
                  <label htmlFor="city">City</label>
                  <InputText id="city" type="text" className="p-inputtext" />
                </div>
                <div className="field col-6 m:col-6">
                  <label htmlFor="description ">description</label>
                <InputText
                  className="p-inputtext"
                  placeholder="Title"
                  value={title}
                  onChange={(event) => setTitle(event.target.value)}
                />
                </div>
                <br />
                <div className="field col-6 m:col-6">
                  <label htmlFor="description ">description</label>
                  <InputTextarea
                    className="p-inputtextarea"
                    rows={5}
                    placeholder="Description"
                    value={description}
                    onChange={(event) => setDescription(event.target.value)}
                  />
                </div>
                <div className="field col-6 md:col-3">
                  <label htmlFor="state">State</label>
                  <Dropdown
                    id="state"
                    value={dropdownItem}
                    onChange={(e) => setDropdownItem(e.value)}
                    options={dropdownItems}
                    optionLabel="name"
                    placeholder="Select One"
                    className="p-dropdown"
                  />
                </div>
                <div className="field col-6 md:col-3">
                  <label htmlFor="zip">Zip</label>
                  <InputText id="zip" type="text" className="p-inputtext" />
                </div>
              </div>
            </div>
          </div>
          <Button label="Save" onClick={handleSaveCard} />
        </div>
      )}

      {cards.map((card, index) => (
        <ItemCard
          key={index}
          image={card.image}
          title={card.title}
          description={card.description}
        />
      ))}
    </div>
  );
}

export default ListCard;
