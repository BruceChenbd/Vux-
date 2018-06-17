/**
 * 获取商品信息
 */
export function getGoodsData(){
    return [
        { id: 1, img: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=699318322,3948704760&fm=27&gp=0.jpg', title: '华为 meta18', desc: '传说中的最强国货', price: 1900 },
        { id: 2, img: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=884863582,2133108003&fm=27&gp=0.jpg', title: 'OPPO R11', desc: '传说中的最强国货', price: 2999 },
        { id: 3, img: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3118976892,3029343837&fm=11&gp=0.jpg', title: 'vivo X20', desc: '传说中的最强国货', price: 2999 },
        { id: 4, img: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3118976892,3029343837&fm=11&gp=0.jpg', title: 'vivo X9', desc: '照亮你的美', price: 3000 },
        { id: 5, img: 'http://p2.so.qhimgs1.com/bdr/_240_/t0192f82259219ceda2.jpg', title: '纯种哈士奇', desc: '最傻的哈士奇', price: 2000 },
        { id: 6, img: 'http://p0.so.qhimgs1.com/bdr/_240_/t01a3ced41637da3064.jpg', title: '小哈士奇', desc: '最萌的哈士奇', price: 2000 }
    ]
}
/**
 * 折扣商品信息
 */
export function getDiscountData(){
    return [
        {
            id:7,img:'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3410831901,3855517418&fm=11&gp=0.jpg',title:'三只松鼠坚果包',desc:'春节囤货首选',price:188,nowPrice:88,
        },
        {
            id:8,img:'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=960751301,2291321833&fm=11&gp=0.jpg',title:'三只松鼠精选蛋糕',desc:'早餐首选',price:88,nowPrice:66,
        },{
            id:9,img:'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1303306315,2166992176&fm=27&gp=0.jpg',title:'三只松鼠精致猪肉脯',desc:'独一无二的口味',price:29.9,nowPrice:19.9,
        },{
            id:10,img:'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3951097140,3793577048&fm=27&gp=0.jpg',title:'精品零食包',desc:'应有尽有',price:66,nowPrice:49.9,
        },{
            id:11,img:'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=548440118,3151128828&fm=27&gp=0.jpg',title:'精制烤肠',desc:'精选猪前腿',price:49.9,nowPrice:39.9,
        },{
            id:12,img:'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=776531295,2543083793&fm=27&gp=0.jpg',title:'美味辣条',desc:'独特的口味',price:29.9,nowPrice:19.9
        }
    ]
}