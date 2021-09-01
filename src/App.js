import "./App.scss"
import React from "react"
import Grid from "@material-ui/core/Grid"
import More from "./components/more"
import Navbar from "./components/navbar"
import Vod from "./components/vod"
import Footer from "./components/footer"
import Own from "./components/ownPakiet"
import Now from "./components/now"
import Pakiet20gb from "./components/pakiet20gb"
import Support from "./components/support"
import Application from "./components/application"
import more from "./components/img/more.png"
import vod from "./components/img/vod/vod.png"
import support from "./components/img/support/background.png"
import application from "./components/img/aplikacja.png"

function App() {
  return (
    <div className="App">
      <Navbar />
      <Grid container alignItems={"center"} justifyContent={"center"}>
        <Grid container spacing={0} style={{ width: 1200, height: 485 }}>
          <Grid
            container
            item
            xs={8}
            alignItems={"center"}
            justifyContent={"center"}
            style={{
              backgroundImage: `url(${more})`,
              backgroundSize: "cover",
            }}
          >
            <More />
          </Grid>
          <Grid
            item
            xs={4}
            // alignItems={"center"}
            // justifyContent={"center"}
            style={{
              backgroundImage: `url(${vod})`,
              backgroundSize: "cover",
            }}
          >
            <Vod />
          </Grid>
        </Grid>

        <Grid container spacing={0} style={{ width: 1200, height: 420 }}>
          <Grid
            container
            item
            xs={8}
            alignItems={"center"}
            justifyContent={"center"}
          >
            <Own />
          </Grid>
          <Grid
            container
            item
            xs={4}
            alignItems={"center"}
            justifyContent={"center"}
          >
            <Now />
          </Grid>
        </Grid>

        <Grid
          container
          spacing={0}
          style={{ width: 1200, height: 340, backgroundColor: "green" }}
        >
          <Grid
            container
            item
            xs={4}
            alignItems={"center"}
            justifyContent={"center"}
          >
            <Pakiet20gb />
          </Grid>
          <Grid
            container
            item
            xs={4}
            alignItems={"center"}
            justifyContent={"center"}
            style={{
              backgroundImage: `url(${support})`,
              backgroundSize: "cover",
            }}
          >
            <Support />
          </Grid>
          <Grid
            container
            item
            xs={4}
            alignItems={"center"}
            justifyContent={"center"}
            style={{
              backgroundImage: `url(${application})`,
              backgroundSize: "cover",
            }}
          >
            <Application />
          </Grid>
        </Grid>
      </Grid>

      <Footer />
    </div>
  )
}

export default App
