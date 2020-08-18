import React from "react";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";

function SearchFilter(props) {
  return (
    <div
      style={{
        border: "1px solid",
        position: "sticky",
        top: "150",
        zIndex: "1",
      }}
    >
      <Container style={{ padding: "15px" }}>
        <FormControl variant="outlined" style={{ width: "100%" }}>
          <InputLabel id="demo-simple-select-outlined-label">
            Categories
          </InputLabel>
          <Select
            labelId="demo-simple-select-outlined-label"
            id="demo-simple-select-outlined"
            label="Categories"
            onChange={props.onCategoryChange}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            {props.categories &&
              props.categories.length > 0 &&
              props.categories.map((option) => (
                <MenuItem key={option.id} value={option.id}>
                  {option.name}
                </MenuItem>
              ))}
          </Select>
        </FormControl>
      </Container>
      <Grid container>
        <Grid item xs={12} sm={12} md={12}>
          <Grid container spacing={1}>
            {props.filters &&
              props.filters.length > 0 &&
              props.filters.map((item) => (
                <Grid item key={item.id} xs={6} sm={4} md={3}>
                  <FormControl
                    key={item.name}
                    variant="outlined"
                    style={{
                      width: "90%",
                    }}
                  >
                    <InputLabel id="demo-simple-select-outlined-label">
                      {item.name}
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-outlined-label"
                      id="demo-simple-select-outlined"
                      label={item.name}
                      onChange={(e) =>
                        props.onFilterChange(item.name, e.target.value)
                      }
                    >
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      {item &&
                        item.values &&
                        item.values.map((option) => (
                          <MenuItem key={option} value={option}>
                            {option}
                          </MenuItem>
                        ))}
                    </Select>
                  </FormControl>
                </Grid>
              ))}
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default SearchFilter;
