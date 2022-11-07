import React, {useState} from 'react';

function AddPlayerForm({handleAddPlayer}) {
  const [value, setValue] = useState('');
  console.log(value);

  const handleSubmit = (e) => {
    e.preventDefault();
    handleAddPlayer(value);
    setValue('');
  }
  return (
    <form onSubmit={handleSubmit}>
      <input type='text' placeholder="Enter a player's name" value={value} onChange={(e) => setValue(e.target.value)} />
      <input type='submit' value='Add Player' />
    </form>
  );
}
export default AddPlayerForm;
