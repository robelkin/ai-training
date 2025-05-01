import React from "react";
import {
  Card,
  Button,
  InputGroup,
  FormControl,
  FormSelect,
} from "react-bootstrap";

const Operations = () => {
  return (
    <Card className="flex-fill">
      <Card.Header>
        <div className="card-actions float-end">
          <input
            type="radio"
            className="btn-check"
            name="btnradio"
            id="buy"
            autoComplete="off"
            defaultChecked
          />
          <label className="btn btn-sm btn-primary" htmlFor="buy">
            Buy
          </label>

          <input
            type="radio"
            className="btn-check"
            name="btnradio"
            id="sell"
            autoComplete="off"
          />
          <label className="btn btn-sm btn-light" htmlFor="sell">
            Sell
          </label>

          <input
            type="radio"
            className="btn-check"
            name="btnradio"
            id="send"
            autoComplete="off"
          />
          <label className="btn btn-sm btn-light" htmlFor="send">
            Send
          </label>
        </div>
        <h5 className="card-title mb-0">Operations</h5>
      </Card.Header>

      <Card.Body>
        <p>Place new order:</p>

        <InputGroup className="mb-3">
          <InputGroup.Text>Amount</InputGroup.Text>
          <FormSelect style={{ maxWidth: "88px" }}>
            <option value="BTC">BTC</option>
            <option value="ETH">ETH</option>
            <option value="LTC">LTC</option>
            <option value="XMR">XMR</option>
          </FormSelect>
          <FormControl type="text" defaultValue="0.25" />
        </InputGroup>

        <InputGroup className="mb-3">
          <InputGroup.Text>Price</InputGroup.Text>
          <FormControl type="text" readOnly defaultValue="23,077.05" />
          <InputGroup.Text>$</InputGroup.Text>
        </InputGroup>

        <InputGroup className="mb-3">
          <InputGroup.Text>Total</InputGroup.Text>
          <FormControl type="text" readOnly defaultValue="5,769.27" />
          <InputGroup.Text>$</InputGroup.Text>
        </InputGroup>

        <div className="d-grid">
          <Button variant="primary" className="mb-3">
            Process to wallet
          </Button>
        </div>

        <p className="text-muted mb-0">
          The final amount could change depending on current market conditions.
        </p>
      </Card.Body>
    </Card>
  );
};

export default Operations;
