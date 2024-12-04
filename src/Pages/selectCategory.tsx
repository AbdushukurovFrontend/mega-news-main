import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

interface Card {
  id: number;
  name: string;
  desc: string;
  img: string;
  categoryName: string;
  categoryImg: string;
}

const SelectCategory = () => {
  const { categoryName } = useParams<{ categoryName: string }>();
  const [cards, setCards] = useState<Card[]>([]);

  useEffect(() => {
    axios
      .get<Card[]>("https://a510c4f98367eca1.mokky.dev/aniDub")
      .then((response) => {
        const filteredCards = response.data.filter(
          (card) => card.categoryName === categoryName
        );
        setCards(filteredCards);
      })
      .catch((error) => {
        console.error("Error fetching cards:", error);
      });
  }, [categoryName]);

  return (
    <div>
      <h1>{categoryName} kategoriyasidagi kartochkalar</h1>
      <div className="grid grid-cols-3 gap-4">
        {cards.map((card) => (
          <div key={card.id} className="card">
            <img
              src={card.img}
              alt={card.name}
              className="w-full h-48 object-cover"
            />
            <h2 className="text-xl">{card.name}</h2>
            <p>{card.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SelectCategory;
