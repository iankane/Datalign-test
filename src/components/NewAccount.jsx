import { FormEvent, useState } from "react";



const NewAccount = (props) => {
  const [account, setAccount] = useState("");
  var handleSubmit = function (e) {
    console.log(account);
    props.setter(account);
    setAccount("");
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit(e);
      }}
    >
      <label>
        Account Name
        <input
          type="text"
          value={account}
          onChange={(e) => {
            setAccount(e.target.value);
          }}
        />
      </label>
    </form>
  );
};

export default NewAccount;
