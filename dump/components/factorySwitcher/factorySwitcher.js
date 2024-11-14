import { FormControl, MenuItem, Select } from "@mui/material";
import { useContext } from "react";
import { UserContext } from "../../contexts/userContext";
import { useNavigate } from "react-router-dom";

const FactorySwitcher = ({ factories }) => {
  const { currentFactory, setAuthData } = useContext(UserContext);
  const navigate = useNavigate();

  const handleChange = (event) => {
    let selectedFactory = factories.find(
      (factory) => factory._id == event.target.value
    );
    setAuthData({ factory: selectedFactory });
    setTimeout(() => {
      navigate("/");
    });
  };
  return (
    <>
      {factories.length ? (
        <FormControl>
          <Select
            value={currentFactory._id}
            onChange={handleChange}
            sx={{
              fontSize: 20,
              color: "white",
              boxShadow: "none",
              ".MuiOutlinedInput-notchedOutline": { border: 0 },
            }}
          >
            {factories.map(({ _id, name }) => (
              <MenuItem value={_id} key={_id}>
                {name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      ) : (
        <></>
      )}
    </>
  );
};

export default FactorySwitcher;
