import "../styles/LoginScreen.css";
import {
  Button,
  Card,
  CardContent,
  Grid2,
  Typography,
  Link,
} from "@mui/material";

export default function LoginScreen() {
  return (
    <Grid2
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{ minHeight: "100vh" }}
    >
      <Grid2 item>
        <Card sx={{ maxWidth: 450 }}>
          <CardContent
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
            }}
          >
            <Typography
              sx={{
                color: "text.primary",
                fontSize: 28,
                marginX: 1,
                marginY: 1,
              }}
            >
              TurboDCP Authentication
            </Typography>
            <Typography sx={{ color: "text.secondary", fontSize: 14 }}>
              By signing into the DCP Creator application, you agree to the{" "}
              <Link href="#">terms and conditions</Link> and agree to not abuse
              the application.
            </Typography>
            <Button variant="contained" style={{ marginTop: 20 }}>
              Sign In
            </Button>
          </CardContent>
        </Card>
      </Grid2>
    </Grid2>
  );
}
