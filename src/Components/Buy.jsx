import "./Header.css";
import "./Buy.css";
import { useState } from "react";
import { Stack, TextField, InputAdornment, Button } from "@mui/material";
import { useProduct } from "./productContext";

function Buy() {
  const { selectedProduct } = useProduct();
  const [value, setValue] = useState("");

  if (!selectedProduct) {
    return <h2 style={{ textAlign: "center" }}>No product selected!</h2>;
  }

  return (
    <div id="header">
      <div id="wrapper">
        <h2>Your Car Details</h2>
        <div>
          <img
            src={selectedProduct.image}
            alt={selectedProduct.name}
            style={{ width: "250px" }}
          />
          <nav>
            <h1>{selectedProduct.name}</h1>
            <li>{selectedProduct.description}</li>
            <p>${selectedProduct.price}</p>
          </nav>
        </div>

        <form>
          <h2>Your Details</h2>
          <nav>
            <Stack>
              <TextField
                label="Name"
                helperText="Enter your Name"
                required
                type="text"
                variant="outlined"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                error={!value}
              />
            </Stack>
          </nav>
          <nav>
            <Stack>
              <TextField
                label="Email"
                helperText="Enter your Email Address"
                required
                type="email"
                variant="outlined"
              />
            </Stack>
          </nav>
          <nav>
            <Stack>
              <TextField
                label="Phone Number"
                helperText="Enter your Valid Phone Number"
                required
                type="text"
                variant="outlined"
              />
            </Stack>
          </nav>
          <nav>
            <Stack>
              <TextField
                label="Location"
                helperText="Enter your Location"
                required
                type="text"
                variant="outlined"
              />
            </Stack>
          </nav>
          <nav>
            <Stack>
              <Button variant="contained" color="info">
                Send
              </Button>
            </Stack>
          </nav>
        </form>
      </div>
    </div>
  );
}

export default Buy;
