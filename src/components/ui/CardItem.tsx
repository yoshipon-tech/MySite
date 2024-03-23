import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import { StaticImageData } from "next/image";

// プロップスの型を定義
type CardItemProps = {
  image: StaticImageData;
  alt: string;
  title: string;
  description: string;
  label: string;
};

export function CardItem({
  image,
  alt,
  title,
  description,
  label,
}: CardItemProps) {
  return (
    <Card sx={{ width: 300 }}>
      <CardActionArea>
        <CardMedia component="img" image={image.src} alt={alt} sx={{height: 200}} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          {label}
        </Button>
      </CardActions>
    </Card>
  );
}
