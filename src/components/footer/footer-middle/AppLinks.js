import { useTheme } from "@emotion/react";
import { Button, Stack, styled, Typography, useMediaQuery } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";
import appleicon from "../../../../public/static/footer/apple.svg";
import playstoreicon from "../../../../public/static/footer/playstore.svg";
import CustomImageContainer from "../../CustomImageContainer";

export const CustomButton = styled(Button)(({ theme, graybackground }) => ({
	// width: "115px",
	height: "40px",
	padding: "8px 15px",
	borderRadius: "5px",
	cursor: "pointer",
	// width: "90%",
	backgroundColor:
		graybackground === "true"
			? theme.palette.footer.appDownloadButtonBgGray
			: theme.palette.footer.appDownloadButtonBg,
	"&:hover": {
		backgroundColor: theme.palette.footer.appDownloadButtonBgHover,
	},
	[theme.breakpoints.down("md")]: {
		maxWidth: "140px",
		height: "40px",
	},
}));
const AppLinks = (props) => {
	const { changeSingle, graybackground, landingPageData } = props;
	const theme = useTheme();
	const isSmall = useMediaQuery(theme.breakpoints.down("sm"))

	let language_direction;
	if (typeof window !== "undefined") {
		language_direction = window.localStorage.getItem("direction");
	}
	const goToApp = (href) => {
		window.open(href);
	};
	const { t } = useTranslation();
	const googlePlay = () => (
		<CustomButton
			onClick={() =>
				goToApp(landingPageData?.download_user_app_links?.playstore_url)
			}
			variant="contained"
			graybackground={graybackground ? "true" : "false"}
		>
			<Stack
				direction="row"
				alignItems="center"
				justifyContent="space-between"
				spacing={0.5}
			>
				<CustomImageContainer
					src={playstoreicon.src}
					alt="GooglePlay"
					objectFit="cover"
					height="20px"
					width="20px"
				/>
				<Stack alignItems="flex-start" justifyContent="center">
					<Typography
						sx={{
							fontSize: { xs: "8px", sm: "10px", md:"10px" },
							color: theme.palette.whiteContainer.main,
						}}
					>
						{t("GET IT ON")}
					</Typography>
					<Typography
						sx={{
							fontWeight: 700,
							fontSize: { xs: "10px", sm: "13px",md:"10px" },
						}}
						color={theme.palette.whiteContainer.main}
					>
						Google Play
					</Typography>
				</Stack>
			</Stack>
		</CustomButton>
	);
	const appleStore = () => (
		<CustomButton
			onClick={() =>
				goToApp(landingPageData?.download_user_app_links?.apple_store_url)
			}
			variant="contained"
			graybackground={graybackground ? "true" : "false"}
		>
			<Stack
				direction="row"
				alignItems="center"
				justifyContent="space-between"
				spacing={0.5}
			>
				<CustomImageContainer
					src={appleicon.src}
					alt="GooglePlay"
					objectFit="cover"
					height="20px"
					width="20px"
				/>
				<Stack alignItems="flex-start" justifyContent="center">
					<Typography
						sx={{
							fontSize: { xs: "8px", sm: "10px", md:"10px" },
							color: theme.palette.whiteContainer.main,
						}}
					>
						{t("Download ON")}
					</Typography>
					<Typography
						sx={{
							fontWeight: 700,
							fontSize: { xs: "10px", sm: "13px",md:"10px" },
						}}
						color={theme.palette.whiteContainer.main}
					>
						{t("App Store")}
					</Typography>
				</Stack>
			</Stack>
		</CustomButton>
	);
	return (
		<Stack
		direction={{ xs: 'row', md: 'column' }}
			spacing={2}
			// sx={{ mt: 4 }}
			gap={language_direction === "rtl" && "10px"}
			
		>
			{Number.parseInt(
				landingPageData?.download_user_app_links?.playstore_url_status
			) === 1 && googlePlay()}
			{Number.parseInt(
				landingPageData?.download_user_app_links?.apple_store_url_status
			) === 1 && appleStore()}
		</Stack>
	);
};

AppLinks.propTypes = {};

export default AppLinks;
