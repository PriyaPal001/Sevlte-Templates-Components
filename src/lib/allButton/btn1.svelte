<!-- HTML !-->
<button class="buttonn" role="button">Button</button>

<style>
    .buttonn {
    background-color: #374151;
  border: 0 solid #E5E7EB;
  box-sizing: border-box;
  color: white;
  display: flex;
  font-family: ui-sans-serif,system-ui,-apple-system,system-ui,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";
  font-size: 1rem;
  font-weight: 700;
  justify-content: center;
  line-height: 1.75rem;
  padding: .75rem 1.65rem;
  position: relative;
  text-align: center;
  text-decoration: none #000000 solid;
  text-decoration-thickness: auto;
  width: 50%;
  max-width: 460px;
  position: relative;
  cursor: pointer;
  transform: rotate(-2deg);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
}

.buttonn:focus {
  outline: 0;
}

.buttonn:after {
  content: '';
  position: absolute;
  border: 1px solid white;
  bottom: 4px;
  left: 4px;
  width: calc(100% - 1px);
  height: calc(100% - 1px);
}

.buttonn:hover:after {
  bottom: 2px;
  left: 2px;
}

@media (min-width: 768px) {
  .buttonn {
    padding: .75rem 3rem;
    font-size: 1.25rem;
  }
}
</style>