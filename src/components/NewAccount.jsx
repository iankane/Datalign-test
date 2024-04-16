import { FormEvent, useState } from "react";

const NewAccount = () => {
  const [account, setAccount] = useState("");
  var handleSubmit = function (e) {};

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
