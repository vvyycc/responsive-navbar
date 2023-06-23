import ItemCard from "./ItemCard";
import React, { useEffect, useState } from 'react';
import { getListCards } from "../pages/api/api";


function ListCard() {
  const [showForm, setShowForm] = useState(false);
  const [cards, setCards] = useState([]);
  // const [dropdownItem, setDropdownItem] = useState(null);
  // const [dropdownItems, setDropdownItems] = useState([
  //   { name: 'Item 1' },
  //   { name: 'Item 2' },
  //   { name: 'Item 3' },
  // ]);

  // const handleCreateCard = () => {
  //   setShowForm(true);
  // };


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getListCards();
        setCards(response.data);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchData();
  }, []);
  

  return (
    <div>
          
      <div className="grid">
        {!showForm && cards.map((card, index) => (
          // eslint-disable-next-line react/jsx-key
          <div className="col-3 mt-7 ml-7">
            <ItemCard
              key={index}
              image={card.image}
              title={card.title}
              description={card.description} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ListCard;


