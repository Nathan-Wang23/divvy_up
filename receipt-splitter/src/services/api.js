export const fetchItems = async () => {
    const response = await fetch('/api/items');
    return response.json();
  };
  
  export const fetchPeople = async () => {
    const response = await fetch('/api/people');
    return response.json();
  };
  
  export const assignItemsToPerson = async (personId, itemIds) => {
    const response = await fetch(`/api/people/${personId}/assign`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ itemIds }),
    });
    return response.json();
  };
  
  export const assignSplitToItem = async (itemId, personId, amount) => {
    const response = await fetch(`/api/items/${itemId}/split`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ personId, amount }),
    });
    return response.json();
  };
  