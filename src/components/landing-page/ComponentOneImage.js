import { Box } from "@mui/system";
import React from "react";
import CustomImageContainer from "../CustomImageContainer";
import CustomContainer from "../container";

const ComponentOneImage = ({ image, isSmall }) => {
    console.log("Image Component", image);
  return (
    <>
      {isSmall ? (
        <CustomContainer>
          <Box
            sx={{
              position: "relative",
              width: "100%",
              borderRadius: "5px",
              marginBottom: "20px",
            }}
          >
            {image && (
              <CustomImageContainer
                src={image}
                alt="Fetched Image"
                height="100%"
                width="100%"
                objectFit="contain"
                borderRadius="5px"
              />
            )}
          </Box>
        </CustomContainer>
      ) : (
        <Box
          sx={{
            position: "relative",
            width: "100%",
            height: "250px",
            borderRadius: "5px",
          }}
        >
          {image && (
            <CustomImageContainer
              src={image}
              alt="Fetched Image"
              height="100%"
              width="100%"
              objectFit="cover"
            />
          )}
        </Box>
      )}
    </>
  );
};

export default ComponentOneImage;
