const apiKey = 'UPseF1mITV_ilO1ztr4KutVG9nP3TbUsyPVaHh0LA5g6tjkAssZ8hFfp2A5L1YSoQ65QFl8XP2qxm7a_qeKeyCro8zltzTrDdL-_dZVIL2Zp8MRBxmHzp5X0NI-VXnYx';

const Yelp = {
    async search(term, location, sortBy) {
        return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, {
            headers: {
                Authorization: `Bearer ${apiKey}`
            }
        }).then(response => response.json()).then(jsonResponse => {
            if (jsonResponse.businesses) {
                return jsonResponse.businesses.map(business => ({
                    id: business.id,
                    imageSrc: business.image_url,
                    name: business.name,
                    address: business.location.address1,
                    city: business.location.city,
                    state: business.location.state,
                    zipCode: business.location.zip_code,
                    category: business.categories[0].title,
                    rating: business.rating,
                    reviewCount: business.review_count
                }));
            }
        }).catch(error => console.log(error));
    }
};

export default Yelp;