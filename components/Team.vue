<template>
<div class="page-wrapper">
    <div class="profile-box">
      <img src="https://placeimg.com/200/200/any" alt="profile pic">
      <h3>John Appleseed</h3>
      <h4>Founder, CEO</h4>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla blandit nibh finibus, pellentesque ante id, ullamcorper lacus. Nam vel malesuada.</p>
      <!-- <div class="btn-container">
        <span class="profile-btn" id="assign"><i class="far fa-clipboard"></i></i>Assign</span>
        <span class="profile-btn" id="view"><i class="far fa-eye"></i>view</span>
      </div> -->
    </div>
    <div class="profile-box">
      <img src="https://placeimg.com/200/200/any" alt="profile pic">
      <h3>John Appleseed</h3>
      <h4>Founder, CEO</h4>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla blandit nibh finibus, pellentesque ante id, ullamcorper lacus. Nam vel malesuada.</p>
      <!-- <div class="btn-container">
        <span class="profile-btn" id="assign"><i class="far fa-clipboard"></i></i>Assign</span>
        <span class="profile-btn" id="view"><i class="far fa-eye"></i>view</span>
      </div> -->
    </div>
    <div class="profile-box">
      <img src="https://placeimg.com/200/200/any" alt="profile pic">
      <h3>John Appleseed</h3>
      <h4>Founder, CEO</h4>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla blandit nibh finibus, pellentesque ante id, ullamcorper lacus. Nam vel malesuada.</p>
      <!-- <div class="btn-container">
        <span class="profile-btn" id="assign"><i class="far fa-clipboard"></i></i>Assign</span>
        <span class="profile-btn" id="view"><i class="far fa-eye"></i>view</span>
      </div> -->
    </div>
    <div class="profile-box">
      <img src="https://placeimg.com/200/200/any" alt="profile pic">
      <h3>John Appleseed</h3>
      <h4>Founder, CEO</h4>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla blandit nibh finibus, pellentesque ante id, ullamcorper lacus. Nam vel malesuada.</p>
      <!-- <div class="btn-container">
        <span class="profile-btn" id="assign"><i class="far fa-clipboard"></i></i>Assign</span>
        <span class="profile-btn" id="view"><i class="far fa-eye"></i>view</span>
      </div> -->
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
  background-color: #f5f7fa;
  margin: auto;
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
  justify-content: space-evenly;
  padding-left: calc(5% - 16px);
  padding-right: calc(5% - 16px);
  margin-top: 32px;
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
  width: 200px;
  text-align: center;
  transition: 300ms;
  flex-grow: 1;
}

.profile-box:hover {
  /* box-shadow: 0 2px 6px 0 rgba(47,83,151,0.40); */
  box-shadow: 0 0 20px 9px rgba(0, 0, 0, 0.03);
}

img {
  width: 80px;
  height: 80px;
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
  font-size: 18px;
  margin-bottom: 0;
  line-height: 1;
  margin-top: 16px;
  color: #464646
}

h4 {
  transition: 500ms;
  font-weight: 300;
  font-size: 14px;
  margin-top: 8px;
  /* color: #98a0a6; */
}

 p {
  transition: 500ms;
  line-height: 1.5;
  font-weight: 400;
  font-size: 12px;
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
