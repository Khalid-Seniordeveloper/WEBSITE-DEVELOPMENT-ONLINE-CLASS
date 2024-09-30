import React, { useEffect, useState } from 'react';
import Card from '../../components/cards/Cards';
import ShowMore from '../../components/show more/showmore';


const Contact = () => {
    const [data, setData] = useState([]);
    const [selectedCard, setSelectedCard] = useState(null);
    const [loading, setLoading] = useState(true); // Add loading state
    const [error, setError] = useState(null);
  
    useEffect(() => {
      fetch('https://fakestoreapi.com/products')
        .then((res) => res.json())
        .then((json) => {
          setData(json);
          setLoading(false); // Data loaded
        })
        .catch((error) => {
          console.error('Error fetching data:', error);
          setError('Failed to load data');
          setLoading(false); // Data loading failed
        });
    }, []);
  
    const handleShowMore = (card) => {
      setSelectedCard(card);
    };
  
    const handleBack = () => {
      setSelectedCard(null);
    };
  
    if (loading) {
      // Display loading spinner only
      return (
        <div className="flex justify-center items-center h-screen">
          <div className="spinner-border animate-spin inline-block w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full" role="status">
            <span className="visually-hidden"></span>
          </div>
        </div>
      );
    }
  
    if (error) {
      // Display error message if any
      return (
        <div className="flex justify-center items-center h-screen">
          <p className="text-red-500">{error}</p>
        </div>
      );
    }
  
    return (
      <div className="container mx-auto p-4">
        {selectedCard ? (
          <ShowMore card={selectedCard} onBack={handleBack} />
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {data.map((item) => (
              <Card
                key={item.id}
                title={item.title}
                description={`Price: $${item.price}`}
                link={item.image}
                onShowMore={() => handleShowMore(item)} // Pass the item to handleShowMore
              />
            ))}
          </div>
        )}
      </div>
    );
  };
  
  export default Contact;
  