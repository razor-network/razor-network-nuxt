<template>
<div class="page-wrapper">
    <div class="profile-box">
      <img src="../assets/images/hrishikesh.jpg" alt="profile pic">
      <h3>Hrishikesh Huilgolkar</h3>
      <h4>Founder and CEO</h4>
      <p>Previously at Consensys</p>
      <!-- <div class="btn-container">
        <span class="profile-btn" id="assign"><i class="far fa-clipboard"></i></i>Assign</span>
        <span class="profile-btn" id="view"><i class="far fa-eye"></i>view</span>
      </div> -->
    </div>


    <div class="profile-box">
      <img src="../assets/images/skanda.jpeg" alt="profile pic">
      <h3>Skanda Bhat</h3>
      <h4>Tech Lead</h4>
      <p>Previously at Ather Energy</p>
      <!-- <div class="btn-container">
        <span class="profile-btn" id="assign"><i class="far fa-clipboard"></i></i>Assign</span>
        <span class="profile-btn" id="view"><i class="far fa-eye"></i>view</span>
      </div> -->
    </div>


    <div class="profile-box">
      <img src="../assets/images/shamanth.jpeg" alt="profile pic">
      <h3>Shamanth Gowda</h3>
      <h4>Business Development Manager</h4>
      <p>Previously at IBM</p>
      <!-- <div class="btn-container">
        <span class="profile-btn" id="assign"><i class="far fa-clipboard"></i></i>Assign</span>
        <span class="profile-btn" id="view"><i class="far fa-eye"></i>view</span>
      </div> -->
    </div>

    <div class="profile-box">
      <img src="../assets/images/divij.jpeg" alt="profile pic">
      <h3>Divij Sood</h3>
      <h4>Head of Communication</h4>
      <!-- <p>Divij is a young Blockchain Enthusiast having a multidimensional and multidisciplinary experience ranging from Marketing to Communications. Working with several blockchain projects he has not only the skills but also the network. Divij has a track record of being a community head in various enterprises. Having experience with numerous internet companies, he found interest in Blockchain and Cryptocurrency. With an idea to implement blockchain in our daily lives, he brought him to Razor Network.</p> -->
      <!-- <div class="btn-container">
        <span class="profile-btn" id="assign"><i class="far fa-clipboard"></i></i>Assign</span>
        <span class="profile-btn" id="view"><i class="far fa-eye"></i>view</span>
      </div> -->
    </div>
    <div class="profile-box">
      <img src="../assets/images/sameer.jpeg" alt="profile pic">
      <h3>Sameer Agarwal</h3>
      <h4>Full Stack Developer</h4>
      <!-- <p>With deep interest in Machine learning and Blockchain Technology, Sameer is a resourceful person. He has a background in engineering, and has learned a lot regarding Decentralized applications, blockchain and smart contracts.</p> -->
      <!-- <div class="btn-container">
        <span class="profile-btn" id="assign"><i class="far fa-clipboard"></i></i>Assign</span>
        <span class="profile-btn" id="view"><i class="far fa-eye"></i>view</span>
      </div> -->
    </div>
    <div class="profile-box">
      <img src="../assets/images/himanshu.jpeg" alt="profile pic">
      <h3>Himanshu Bisht</h3>
      <h4>Head of Marketing</h4>
      <!-- <p>Himanshu is a computer science engineer turned into an entrepreneur and marketer. He has six years of experience in sales and marketing. He has worked with hundreds of entrepreneurs and startups to survive and grow their business with his proven marketing skills.</p> -->
      <!-- <div class="btn-container">
        <span class="profile-btn" id="assign"><i class="far fa-clipboard"></i></i>Assign</span>
        <span class="profile-btn" id="view"><i class="far fa-eye"></i>view</span>
      </div> -->
    </div>
    <div class="profile-box">
      <img src="../assets/images/chirdeep.png" alt="profile pic">
      <h3>Chirdeep Singh Chhabra</h3>
      <h4>Advisor</h4>
      <p>Founder, Ocean Protocol.<br />Previously, CEO of DEX Pte Ltd.</p>
    </div>
    <div class="profile-box">
      <img src="../assets/images/nathan.jpeg" alt="profile pic">
      <h3>Nathan Sexer</h3>
      <h4>Advisor</h4>
      <p>Head of Growth & Marketing, The Sandbox.<br />Technical advisor, Blockchain at Berkeley.</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "team"
};
</script>

<style scoped>

.page-wrapper {
  background-color: transparent;
  margin: auto;
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
  justify-content: space-evenly;
  padding-left: calc(5% - 16px);
  padding-right: calc(5% - 16px);
  margin-top: 32px;
  margin-bottom: 36px;
  /* padding: 0 5%; */
}

nav {
  min-height: 72px;
  background: #ffffff;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.05);
  padding: 0 5%;
  display: flex;
  flex-direction: row;
  align-items: center;
}

.profile-box {
  background: #ffffff;
  box-shadow: 0 2px 6px 0 rgba(47, 83, 151, 0.1);
  border-radius: 3px;
  margin: 16px 16px;
  padding: 16px 16px;
  width: 300px;
  text-align: center;
  transition: 300ms;
  flex-grow: 1;
}

.profile-box:hover {
  /* box-shadow: 0 2px 6px 0 rgba(47,83,151,0.40); */
  box-shadow: 0 0 20px 9px rgba(0, 0, 0, 0.03);
}

img {
  width: 140px;
  height: 140px;
  border-radius: 50%;
  box-shadow: 0 2px 6px 0 rgba(47, 83, 151, 0.1);
}

#logo {
  width: 127px;
  height: 100%;
  border-radius: 0%;
  background-color: white;
  margin-right: 32px;
  box-shadow: none;
}

#searchField {
  width: 100%;
  background: rgba(245, 247, 250, 0.2);
  border: 1px solid #f5f7fa;
  border-radius: 6px;
  padding: 8px 16px;
}

::placeholder {
  color: #98a0a6;
  font-style: italic;
  font-weight: 300;
}

h3 {
  font-weight: 300;
  font-size: 20px;
  margin-bottom: 0;
  line-height: 1;
  margin-top: 18px;
  color: #464646
}

h4 {
  transition: 500ms;
  font-weight: 300;
  font-size: 16px;
  margin-top: 8px;
  /* color: #98a0a6; */
}

 p {
  transition: 500ms;
  line-height: 1.5;
  font-weight: 400;
  font-size: 14px;
  margin-top: 8px;
  color: #464646;
  }

#assign,
#view {
  width: 50%;
  font-size: 14px;
  color: #98a0a6;
  font-weight: 300;
  padding: 8px 0;
  border-radius: 100px;
  transition: 300ms;
  cursor: pointer;
}

#assign:hover,
#view:hover {
  background-color: #507bfc;
  color: white;
  box-shadow: 0 10px 20px 0 rgba(80, 123, 252, 0.5);
}

#assign {
  float: left;
}

#view {
  float: right;
}

i {
  margin-right: 8px;
}


</style>
