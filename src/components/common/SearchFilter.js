import React from "react";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";

function SearchFilter(props) {
  const useStyles = makeStyles((theme) => props.appStyles);
  const classes = useStyles();
  return (
    <div className={classes.main}>
      <Container className={classes.container} maxWidth={false}>
        <FormControl variant="outlined" className={classes.formControl}>
          <InputLabel id="demo-simple-select-outlined-label">
            Categories
          </InputLabel>
          <Select
            labelId="demo-simple-select-outlined-label"
            id="demo-simple-select-outlined"
            label="Categories"
            onChange={props.onCategoryChange}
          >
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
      {props.filters && props.filters.length > 0 ? (
        <Grid container style={{ padding: "15px" }}>
          <Grid item xs={12} sm={12} md={12}>
            <Grid container spacing={1}>
              {props.filters.map((item) => (
                <Grid item key={item.id} xs={6} sm={4} md={3} lg={3} xl={3}>
                  <FormControl
                    key={item.name}
                    variant="outlined"
                    style={{
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
                          <MenuItem key={option.id} value={option.name}>
                            {option.name}
                          </MenuItem>
                        ))}
                    </Select>
                  </FormControl>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      ) : null}
    </div>
  );
}

export default SearchFilter;
