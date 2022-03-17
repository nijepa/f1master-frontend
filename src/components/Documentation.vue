Skip to content Pull requests Issues Marketplace Explore @nijepa wellerson010 /
f1masters-final-front Private Code Issues Pull requests Actions Projects
Security Insights f1masters-final-front/src/components/Documentation.vue
@Venezyz Venezyz createdDataObjects Latest commit f8c7f5b yesterday History 2
contributors @Venezyz @Flauzino 185 lines (168 sloc) 10.4 KB /* eslint-disable
*/
<template>
  <div class="wrap">
    <div class="page">
      <h2>...for developers</h2>
      <br /><br /><br /><br />

      <h2>F1Master is fantasy Game about Formula 1.</h2>
      <br /><br />
      <p>
        After registration, users are invited to inform they predictions to race
        results ( see
        <router-link to="/playtoearn">Play To Earn</router-link> page).<br />
        And they predictions should match with the oficial results (<router-link
          to="/start"
          >Start Race</router-link
        >
        and <router-link to="/race">Finish Race</router-link>)
      </p>
      <br /><br />

      <h2>How do users earn points?</h2>
      <br /><br />
      <p>
        Users score points by answering one of the 5 forms within the "PLAY TO
        EARN" page.
      </p>
      <br />
      <h4>Form 1: Poletime</h4>
      <br /><br />
      <p>
        Competition about prediction for time about the Pole Position (minutes,
        seconds and miliseconds).<br />
        Calculate substract the 'maximum point' possible (25000) from the 'gap',
        difference between the oficial result and user prediction.<br />
      </p>
      <br />
      <span style="color: green">
        /*basic function logic:*/<br />
        /*It´s a sample logic. Developers can change it to another*/<br />
      </span>
      <div style="background: rgba(0, 0, 0, 0.9); padding: 20px">
        <span style="color: blue">function</span> poletimePointsCalculation (
        <span style="color: red">poletimeResult</span>,<span style="color: red">
          poletimePrediction</span
        >
        ){<br />
        <span style="margin-left: 60px"></span>
        <span style="color: blue">const</span> gap =
        Math.abs(parseInt(poletimeResult) - parseInt(poletimePrediction));<br />
        <span style="margin-left: 60px"></span>
        <span style="color: green"
          >//Consider this 2 variable are comming in string format</span
        >;<br />
        <span style="color: blue; margin-left: 60px">const</span> maxPoint =
        25000;
        <span style="color: green"
          >//max point is total points possible, define by system rules</span
        >;<br />
        <span style="color: blue; margin-left: 60px">const</span> userPoints =
        if(maxPoint - gap &lt; 0 ? 0 : maxPoint - gap);<br /><br />
        <span style="margin-left: 80px; color: blue"> return</span> {<br />
        <span style="margin-left: 90px; color: red"> userPoints</span><br />
        <span style="margin-left: 60px"></span> }<br />
        <span style="margin-left: 50px"></span> }
      </div>
      <br />
      <p>
        Obviously the variables need to correspond to the same event (ex:
        Australia 2022...). Points are accumulated event by event until the end
        of the <u>season</u>.<br />
        Poletime Competiton is a individual competition. The
        <router-link to="tablePoletimeExample"
          >table of results Example</router-link
        >
        show all users together, without <u>groups division</u><br /><br />
      </p>

      <h4>Form 2: F1Master</h4>
      <br /><br />
      <p>
        Competition about prediction for TOP10 finish race results.<br />
        Users sent they prediction to 1 to 10 finish race results. For each
        correct prediciton, users make points accordling with the position<br /><br />
        <span style="color: green"
          >/*basic function logic. Probably this is a stupid Method*/</span
        ><br />
      </p>
      <div style="background: rgba(0, 0, 0, 0.9); padding: 20px">
        <span style="color: blue">function</span> f1masterRaceCalculatePoints
        (<span style="color: red">top10RaceResult</span>,<span
          style="color: red"
          >userTop10Prediction</span
        >
        ){<br />
        <span style="color: blue; margin-left: 60px">const</span> positionOne =
        if(top10RaceResult[0] === userTop10Prediction[0] ? 25 : 0 );<br />
        <span style="color: blue; margin-left: 60px">const</span> positionTwo =
        if(top10RaceResult[1] === userTop10Prediction[1] ? 18 : 0 );<br />
        <span style="color: blue; margin-left: 60px">const</span> positionTree =
        if(top10RaceResult[2] === userTop10Prediction[2] ? 15 : 0 );<br />
        <span style="color: blue; margin-left: 60px">const</span> positionFour =
        if(top10RaceResult[3] === userTop10Prediction[3] ? 12 : 0 );<br />
        <span style="color: blue; margin-left: 60px">const</span> positionFive =
        if(top10RaceResult[4] === userTop10Prediction[4] ? 10 : 0 );<br />
        <span style="color: blue; margin-left: 60px">const</span> positionSix =
        if(top10RaceResult[5] === userTop10Prediction[5] ? 8 : 0 );<br />
        <span style="color: blue; margin-left: 60px">const</span> positionSeven
        = if(top10RaceResult[6] === userTop10Prediction[6] ? 6 : 0 );<br />
        <span style="color: blue; margin-left: 60px">const</span> positionEigth
        = if(top10RaceResult[7] === userTop10Prediction[7] ? 4 : 0 );<br />
        <span style="color: blue; margin-left: 60px">const</span> positionNine =
        if(top10RaceResult[8] === userTop10Prediction[8] ? 2 : 0 );<br />
        <span style="color: blue; margin-left: 60px">const</span> positionTen =
        if(top10RaceResult[9] === userTop10Prediction[9] ? 1 : 0 );<br /><br />

        <span style="color: blue; margin-left: 80px">const</span> userPoints =
        positionOne +;<br />
        <span style="margin-left: 100px">+ positionTwo;</span><br />
        <span style="margin-left: 100px">+ positionTree ;</span><br />
        <span style="margin-left: 100px">+ positionFour ;</span><br />
        <span style="margin-left: 100px">+ positionFive;</span><br />
        <span style="margin-left: 100px">+ positionSix ;</span><br />
        <span style="margin-left: 100px">+ positionSeven ;</span><br />
        <span style="margin-left: 100px">+ positionEigth ;</span><br />
        <span style="margin-left: 100px">+ positionNine ;</span><br />
        <span style="margin-left: 100px">+ positionTen;</span><br /><br />

        <span style="margin-left: 80px; color: blue"> return</span> {<br />
        <span style="margin-left: 90px; color: red"> userRacePoints</span><br />
        <span style="margin-left: 60px"></span> }<br />
        <span style="margin-left: 50px"></span> }
      </div>
      <br />

      <p>
        Tiebraker: <br />
        The same formula ("f1masterRaceCalculatePoints()") is used to calculate
        the tiebraker. Tiebraker is the user predictions compare with top10
        start racing.<br />
      </p>

      <div style="background: rgba(0, 0, 0, 0.9); padding: 20px">
        <span style="color: blue">function</span>
        f1masterQualifyingCalculatePoints (<span style="color: red"
          >top10StartRace</span
        >,<span style="color: red">userTop10Prediction</span> ){<br />
        <span style="color: blue; margin-left: 60px">const</span>
        startingPositionOne = if(top10StartRace[0] === userTop10Prediction[0] ?
        25 : 0 );<br />
        <span style="color: blue; margin-left: 60px">const</span>
        startingPositionTwo = if(top10StartRace[1] === userTop10Prediction[1] ?
        18 : 0 );<br />
        <span style="color: blue; margin-left: 60px">const</span>
        startingPositionTree = if(top10StartRace[2] === userTop10Prediction[2] ?
        15 : 0 );<br />
        <span style="color: blue; margin-left: 60px">const</span>
        startingPositionFour = if(top10StartRace[3] === userTop10Prediction[3] ?
        12 : 0 );<br />
        <span style="color: blue; margin-left: 60px">const</span>
        startingPositionFive = if(top10StartRace[4] === userTop10Prediction[4] ?
        10 : 0 );<br />
        <span style="color: blue; margin-left: 60px">const</span>
        startingPositionSix = if(top10StartRace[5] === userTop10Prediction[5] ?
        8 : 0 );<br />
        <span style="color: blue; margin-left: 60px">const</span>
        startingPositionSeven = if(top10StartRace[6] === userTop10Prediction[6]
        ? 6 : 0 );<br />
        <span style="color: blue; margin-left: 60px">const</span>
        startingPositionEigth = if(top10StartRace[7] === userTop10Prediction[7]
        ? 4 : 0 );<br />
        <span style="color: blue; margin-left: 60px">const</span>
        startingPositionNine = if(top10StartRace[8] === userTop10Prediction[8] ?
        2 : 0 );<br />
        <span style="color: blue; margin-left: 60px">const</span>
        startingPositionTen = if(top10StartRace[9] === userTop10Prediction[9] ?
        1 : 0 );<br /><br />

        <span style="color: blue; margin-left: 80px">const</span>
        userQualifyingPoints = startingPositionOne +;<br />
        <span style="margin-left: 100px">+ startingPositionTwo;</span><br />
        <span style="margin-left: 100px">+ startingPositionTree ;</span><br />
        <span style="margin-left: 100px">+ startingPositionFour ;</span><br />
        <span style="margin-left: 100px">+ startingPositionFive;</span><br />
        <span style="margin-left: 100px">+ startingPositionSix ;</span><br />
        <span style="margin-left: 100px">+ startingPositionSeven ;</span><br />
        <span style="margin-left: 100px">+ startingPositionEigth ;</span><br />
        <span style="margin-left: 100px">+ startingPositionNine ;</span><br />
        <span style="margin-left: 100px">+ startingPositionTen;</span
        ><br /><br />

        <span style="margin-left: 80px; color: blue"> return</span> {<br />
        <span style="margin-left: 90px; color: red"> userQualifyingPoints</span
        ><br />
        <span style="margin-left: 60px"></span> }<br />
        <span style="margin-left: 50px"></span> }
      </div>
      <br />
      <p>...and finally, users' points are assigned<br /></p>
      <div style="background: rgba(0, 0, 0, 0.9); padding: 20px">
        <span style="color: blue">function</span> f1masterFinalPoints (<span
          style="color: red"
          >userQualifyingPoints</span
        >,<span style="color: red">userRacePoints</span> ){<br />
        <span style="color: blue; margin-left: 60px">const</span>
        f1masterUserPoints = userRacePoints + userQualifyingPoints / 10000;<br /><br />
        <span style="color: blue; margin-left: 60px">return</span>{<br />
        <span style="margin-left: 100px; color: red">f1masterUserPoints</span
        ><br />
        <span style="margin-left: 60px"></span>}<br />
        <span style="margin-left: 30px"></span> }
      </div>
      <br />
      <p>
        All users registration in F1Master have a Group and a Team and its
        defined using the follow function<br />
      </p>

      <div style="background: rgba(0, 0, 0, 0.9); padding: 20px"></div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.wrap {
  display: grid;
  justify-items: center;
  background: linear-gradient(
    rgba(0, 0, 0, 0.755) 2%,
    rgba(8, 3, 102, 0.796),
    rgb(20, 0, 90),
    black
  );
}
.page {
  width: 65vw;
  min-width: 600px;
  margin-top: 100px;
  padding: 200px;
  letter-spacing: 1px;
  text-indent: 4em;
  background: #fafafa;
  font-size: 12px;
  padding: 100px 60px;
  word-break: break-all;
}
h2 {
  color: black;
  font-weight: bold;
  font-size: 25px;
  text-shadow: 0px 0px 0px black;
  line-height: 25px;
  width: auto;
  display: inline;
}
h4 {
  color: black;
  font-weight: bold;
  font-size: 20px;
  text-shadow: 0px 1px 0px rgb(55, 53, 53);
  line-height: 25px;
  width: auto;
  display: inline;
}
.d {
  color: black;
  font-size: 1rem;
  font-weight: 700;
}
p {
  color: #434343;
  font-size: 14px;
  margin-left: 20px;
  letter-spacing: 0px;
}
p:hover {
  color: #404040;
}
</style>

© 2022 GitHub, Inc. Terms Privacy Security Status Docs Contact GitHub Pricing
API Training Blog About Loading complete
