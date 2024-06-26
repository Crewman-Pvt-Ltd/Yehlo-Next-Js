import { Typography, alpha, styled, useTheme } from "@mui/material";
import { Box, Stack } from "@mui/system";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import Slider from "react-slick";
import { getCurrentModuleType } from "../../../../helper-functions/getCurrentModuleType";
import { setSelectedModule } from "../../../../redux/slices/utils";
import {
	CustomBoxFullWidth,
	CustomStackFullWidth,
	SliderCustom,
} from "../../../../styled-components/CustomStyles.style";
import { IsSmallScreen } from "../../../../utils/CommonValues";
import CustomImageContainer from "../../../CustomImageContainer";
import { settings } from "./sliderSettings";

const CardWrapper = styled(Stack)(({ theme, bg_change }) => ({
	// backgroundColor: theme.palette.background.paper,
	color: "inherit",
	minWidth: "60px",
	minHeight: "70px",
	padding: "10px",
	// border: `1px solid ${alpha(theme.palette.neutral[400], 0.2)}`,
	borderRadius: "10px",
	cursor: "pointer",
	transition: "all ease 0.5s",
	position: "relative",
	zIndex: "99",
	"&:hover": {
		backgroundColor: theme.palette.primary.main,
		color: theme.palette.whiteContainer.main,
		".text": {
			color: theme.palette.whiteContainer.main,
		},
	},
}));
const ImageWrapper = styled(Box)(({ theme }) => ({
	width: "50px",
	height: "50px",
	position: "relative",
}));
const Card = ({ item, configData, isSelected, handleClick }) => {
	const theme = useTheme();
	const { t } = useTranslation();
	return (
		<CardWrapper
			onClick={() => handleClick(item)}
			bg_change={isSelected === item?.module_type ? "true" : "false"}
			textAlign="center"
			alignItems="center"
			width={{ xs: '10%', sm: '30%', md: '11%' }}
				display="flex"
		>
			<ImageWrapper>
		<CustomImageContainer
			src={`${configData?.base_urls?.module_image_url}/${item?.icon}`}
			alt={item?.module_name}
			height="100%"
			width="100%"
			obejctfit="contained"
			borderRadius="5px"
			
		/>
	</ImageWrapper>
			<Typography
				sx={{
					cursor: "pointer",
				}}
				variant={IsSmallScreen() ? "h8" : "h6"}
			>
				{item?.module_name}
			</Typography>
			{/* <CustomStackFullWidth
				direction="column"
				alignItems="center"
				spacing={1}
				justifyContent={item?.module_type !== "parcel" ? "space-between" : "flex-end"}
				sx={{
					position: "relative",
					"&:hover": {
						color: (theme) => theme.palette.whiteContainer.main,
					},
				}}
			>
				
				
				{item?.module_type !== "parcel" && (
					<Stack>
						<Typography variant="body2" color="text.secondary" className="text">
							{t("Over")}
						</Typography>
						{item?.module_type === "ecommerce" ? (
							<Typography variant="body2" color="text.secondary" className="text">
								{item?.items_count > 2
									? item?.items_count - 1
									: item?.items_count}
								{item?.items_count > 2 && "+"} {t("Items")}
							</Typography>
						) : (
							<Typography variant="body2" color="text.secondary" className="text">
								{item?.stores_count > 2
									? item?.stores_count - 1
									: item?.stores_count}
								{item?.stores_count > 2 && "+"}{" "}
								{item?.module_type === "food" ? t("Restaurants") : t("Store")}
							</Typography>
						)}
					</Stack>
				)}
			</CustomStackFullWidth> */}
		</CardWrapper>
	);
};

const ModuleSelectionRaw = (props) => {
	const { isSmall } = props;
	const { modules, configData } = useSelector((state) => state.configData);
	const [isSelected, setIsSelected] = useState(getCurrentModuleType());
	const router = useRouter();
	const dispatch = useDispatch();
	const handleClick = (item) => {
		setIsSelected(item?.module_type);
		dispatch(setSelectedModule(item));
		localStorage.setItem("module", JSON.stringify(item));
		router.replace("/home");
	};

	return (
		<CustomStackFullWidth
		  flexDirection="row"
		  alignItems="center"
		  flexWrap="wrap"
		  gap="15px"
		//   mt="30px"
		  sx={{ justifyContent: { xs: "center", sm: "left", md: "left" }, 
		marginTop: {xs: "0px", md: "30px"}
		
		}}
		>
		  {modules?.length > 0 &&
			modules.map((item, index) => {
			  return (
				<Card
				  key={index}
				  item={item}
				  configData={configData}
				  isSelected={isSelected}
				  handleClick={handleClick}
				/>
			  );
			})}
		</CustomStackFullWidth>
	  );
	  
};

ModuleSelectionRaw.propTypes = {};

export default ModuleSelectionRaw;
