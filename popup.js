var app = new Vue({
    el: '#app',
    data : {
        categories : {
            "financial_issues" : {
                "limo commission issue" : [
                    `ازيك يا كابتن تم احتساب عمولة المكتب بشكل صحيح. شكراً لثقتك يرجى الإجابة على استطلاع الرأي التالي مساعدتنا في تحسين جودة الخدمة:https://goo.gl/FQgfks`,
                    `ازيك يا كابتن,جارى العمل على حل المشكلة وسيتم اضافة المستحقات بواقع مبلغ (قيمة المبلغ)، ويمكن سحب جميع المستحقات بالدورة الجديدة,شكراً لثقتك,يرجى الإجابة على استطلاع الرأي التالي لمساعدتنا في تحسين جودة الخدمة:https://goo.gl/FQgfks,`,
                    `"ازيك يا كابتن
                    جارى العمل على حل المشكلة وسيتم اضافة المستحقات بواقع مبلغ (قيمة المبلغ)، ويمكن سحب جميع المستحقات بالدورة الجديدة
                    شكراً لثقتك
                    يرجى الإجابة على استطلاع الرأي التالي لمساعدتنا في تحسين جودة الخدمة:https://goo.gl/FQgfks
                    "`
                ],
                "financial issue with supplier": [

                ],
                "smart wallet issue": [

                ]
            },
            "bonus_and_guarantee_issue": {},
            "adma_and_trips_issues": {},
            "cap_transfer_and_updating_info": {},
            "quality_issues": {}
        },
        showCategories : true,
        showSubCategory : false,
        showIssues : false,
        selectedCat: '',
        selectedSubCat : ''
    },
    methods : {
        showSubCatMethod : function (cat) {
            this.selectedCat = cat
            this.showCategories = false;
            this.showSubCategory= true;
            this.showIssues = false

        },
        showIssuesMethod: function (subcat) {
            this.selectedSubCat = subcat
            this.showCategories = false;
            this.showSubCategory= false;
            this.showIssues = true;
        },
        selectAnIssue(issue){
            chrome.storage.local.get(['agentName'],function (data) {
                var fullReply = `${issue} , ${data.agentName}`,
                    txtNode = document.createTextNode(fullReply);
                chrome.tabs.query({active : true , currentWindow : true},function (tabs) {
                    chrome.tabs.executeScript(tabs[0].id,{
                        code : `
                            var domElement = document.querySelectorAll('._5pbx.userContent._3576 p')[0];
                            domElement.innerText= '${fullReply}';
                            domElement.innerText = domElement.innerText.replace("," , "\\r\\n")`
                    });
                })
            })
        }
    }
})