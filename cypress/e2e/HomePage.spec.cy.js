require('cypress-xpath')

describe('Home Page', () => {

  it.only('Search Results - Mobiles', () => {

    var desiredMobile = 'iPhone 15 Pro Max'
    var model  = '(White Titanium, 256 GB)'

    cy.log(`Login to Flipkart Homepage`)
    cy.visit(`https://www.flipkart.com/`)
    cy.wait(2000)

    cy.log(`Search for `+desiredMobile)
    cy.xpath(`//input[@title='Search for Products, Brands and More']`).clear().type(desiredMobile)
    cy.wait(2000)

    cy.log(`Click on the submit button`)
    cy.xpath(`//button[@type='submit']`).click()
    cy.wait(5000)

    cy.xpath(`//div[contains(text(),'`+desiredMobile+` `+model+`')]`).then((href)=>{
      cy.log(href)
    })


   

  })

  it('API Testing - Instagram',()=>{
    // cy.request({
    //   method: 'POST',
    //   url: 'https://www.instagram.com/api/graphql',
    //   body:{
    //     "lsd" :"AVrvegm-yWg",
    //     // "variables":'{"shortcode":"C1uBVc6xHRI","fetch_comment_count":40,"fetch_related_profile_media_count":3,"parent_comment_count":24,"child_comment_count":3,"fetch_like_count":10,"fetch_tagged_user_count":null,"fetch_preview_comment_count":2,"has_threaded_comments":true,"hoisted_comment_id":null,"hoisted_reply_id":null}',
    //     // "doc_id":"10015901848480474"
    //   }
    // })
    // cy.visit(`https://www.flipkart.com/`)

    // cy.log(cy.location)
  })
})