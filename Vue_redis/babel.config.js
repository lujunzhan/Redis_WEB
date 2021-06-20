/*
 * @Descripttion: 
 * @version: 
 * @Author: LJZ
 * @Date: 2020-12-01 22:24:10
 * @LastEditTime: 2020-12-01 23:34:39
 */
module.exports = {
    presets: [
        '@vue/cli-plugin-babel/preset',
        {
            "plugins": [
                ["import", {
                    "libraryName": "view-design",
                    "libraryDirectory": "src/components"
                }]
            ]
        }
    ]

}