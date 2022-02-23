export function getIconHTML(src, title, info) {
  const html = `
   
    <div id="icon" style="
        background-color: white;
        border-radius: 25px;
        display: flex;
        flex-direction: row;
        width: 120px;
        height: 50px;
        padding: 0 10px;
        align-items: center;
        border: 2px solid #2b6bf3;
    ">
        <img id="icon_img" href=src style="
            width: 40px;
            height: 40px;
            border-radius: 20px;
        "/>
        <div id="icon_info" style="
            display: flex;
            flex-direction: column;
            padding: 0 5px;
            height: 100%
            font-size: 16px;
        ">
            <label>${title}</label>
            <label>${info}</label>
        </div>
    </div>`;
  return html;
}
