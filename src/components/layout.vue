<template>
  <div class="firstBlock">
    <div class="block">
      <div class="infoWithIcon">
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
        <span class="material-symbols-outlined">
        inventory
        </span>
        <h2 class="infoText">Отчетов оформлено</h2>
      </div>
      <h2>123</h2>
    </div>
    <div class="block">
      <div class="infoWithIcon">
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
        <span class="material-symbols-outlined">
        person
        </span>
        <h2 class="infoText">Численность работников</h2>
      </div>
      <h2>123</h2>
    </div>
    <div class="block">
      <div class="infoWithIcon">
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
        <span class="material-symbols-outlined">
        house
        </span>
        <h2 class="infoText">Отчетов оформлено</h2>
      </div>
      <h2>123</h2>
    </div>
  </div>
  <div class="secondBlock">

    <div class="checkboxBlock">
      <div class="checkboxField">
        <div>
          <input type="checkbox" id="info" >
          <label for="info">Заполните информацию о компании</label>
        </div>
        <button type="button" class="button">Перейти</button>
      </div>
      <p>Это создаст более привлекательный образ компании и позволит вашим сотрудникам убедиться, что все идет как нужно.</p>
    </div>
    <div class="checkboxBlock">
      <div class="checkboxField">
        <div>
          <input type="checkbox" id="person" >
          <label for="person">Создайте сотрудника</label>
        </div>
        <button type="button" class="button">Перейти</button>
      </div>
      <p>Сотрудник - это человек, который будет проходить обучение. Вы можете пропустить этот шаг, если хотите протестировать систему самостоятельно.</p>
    </div>
  </div>
</template>

<script>

export default {
  name: "layoutPage"
}
</script>

<style scoped>
label {
  font-size: 20px;
}
input[type="checkbox"]:checked,
input[type="checkbox"]:not(:checked)
{
  position: absolute;
  left: -9999px;
}
input[type="checkbox"]:checked,
input[type="checkbox"]:not(:checked)
{
  display: inline-block;
  position: relative;
  padding-left: 28px;
  line-height: 20px;
  cursor: pointer;
}
input[type="checkbox"]:checked,
input[type="checkbox"]:not(:checked)
{
  content: "";
  position: relative;
  left: -10px;
  top: 0px;
  width: 18px;
  height: 18px;
  border: 1px solid #dddddd;
  background-color: #ffffff;
}
input[type="checkbox"]:checked + label:before,
input[type="checkbox"]:not(:checked) + label:before {
  border-radius: 2px;
}
p {
  display: flex;
  justify-content: flex-start;
}
h2 {
  font-size: 20px;
}
.firstBlock {
  width: 65%;
  margin: auto;
  display: flex;
  justify-content: center;
}
.block {
  width: 20%;
  padding: 20px;
  display: flex;
  justify-content: space-around;
}
.material-symbols-outlined {
  position: relative;
  bottom: -12px;
  font-size: 35px;
}
.infoText {
  width: 50%;
  font-size: 15px;
  font-weight: normal;
}
.infoWithIcon {
  padding-right: 30px;
  display: flex;
  justify-content: center;
}
.checkboxField {
  display: flex;
  justify-content: space-between;
}
.checkboxBlock {
  margin-bottom: 50px;
  margin-top: 50px;
}
.secondBlock {
  margin: auto;
  width: 65%
}
.button {
  appearance: none;
  border: 1px solid #000;
  background: #33be8c;
  color: #fff;
  padding: 8px 16px;
  font-size: 16px;
  cursor: pointer;
}
</style>