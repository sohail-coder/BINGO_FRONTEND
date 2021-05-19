import React from "react";
import "./css/category.css";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";

import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";

import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    maxWidth: 200,
  },
});

function Category(category) {
  const classes = useStyles();

  return (
    <div className="category">
      <Card className={`${classes.root} item`}>
        <CardActionArea>
          <CardMedia
            component="img"
            alt={category.title}
            height="200"
            image={category.img}
          />
          <CardContent>
            <span>
              <Typography
                gutterBottom
                variant="h6"
                component="h2"
                style={{ textAlign: "center" }}
              >
                {category.title}
              </Typography>
            </span>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
}

export default Category;
