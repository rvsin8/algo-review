export const cardComponentT1 = ({icon,title,count,background})=>{
    return `<div class="col-12 col-sm-6 col-md-3 mb-3">
                <div class="t1-card" style="background:${background&&background};border-bottom-color:${background&&background}">
                    <div class="t1-card-body">
                        <div class="t1-card-count">${count&&count}</div>
                        <div class="t1-title-grp">
                            <div class="t1-title">${title&&title}</div>
                            <div class="t1-icon"><i class="${icon?icon:"fa fa-users"}"></i></div>
                        </div>
                    </div>
                </div>
            </div>`
}