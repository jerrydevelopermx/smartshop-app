import React from "react";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

function SearchFilter(props) {
  return (
    <div className={props.classes.searchContent}>
      <FormControl variant="outlined" className={props.classes.searchField}>
        <InputLabel id="demo-simple-select-outlined-label">
          Categories
        </InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          label="Categories"
          value={""}
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
      {props.filters && props.filters.length > 0 ? (
        <Typography variant="body2">Filters</Typography>
      ) : null}
      <Grid container spacing={2}>
        {props.filters &&
          props.filters.length > 0 &&
          props.filters.map((item) => (
            <Grid item key={item.id} xs={6} sm={4} md={3}>
              <FormControl
                key={item.name}
                variant="outlined"
                style={{
                  margin: "4px",
                  width: "100%",
                }}
              >
                <InputLabel id="demo-simple-select-outlined-label">
                  {item.name}
                </InputLabel>
                <Select
                  labelId="demo-simple-select-outlined-label"
                  id="demo-simple-select-outlined"
                  label={item.name}
                  onChange={props.onFilterChange}
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
    </div>
  );
}

export default SearchFilter;
