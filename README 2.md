Design and develop a Cash Book application using React.js, follow the below instruction to complete the submission.
<br>
# **[Download Source Code here][1]**
<br>
To begin developing the **` Cash Book`**, an empty state is required and must consist of the screenshot shown below.
<br>
![enter image description here][2]
<br>

And `Today's Balance` should be `zero` with **` No Entry Found!`** message at the centre of the screen.
<br>
Add two action buttons at the bottom (refer the `App.css` provided).
<br>
## Let's now understand about these two buttons

* `IN` Button (used to make an entry for cash-in)
* `OUT` Button (used to make an entry for cash-out)
<br>
![enter image description here][3]
<br>
## What are Cash-in and Cash-out?

* whenever an amount is received we record an entry for it (amount received) as `cash-in`.
* whenever we spend any amount on something we record an entry for it (amount spent) as `cash-out`.

<br>
![enter image description here][4]
<br>
When creating an entry for cash-in we take `amount`, `note`, `timestamp`, `type` (refer the mock folder for details)
<br>
## Perform validation:

* `amount` should be of the `Integer` or `Float`
* `note` should be a `String`
* create new entry button should be disabled for invalid values
<br>
![enter image description here][5]
<br>
Similarly, we do for `cash-out` and perform the required validation as mentioned above.
<br>
# **Refer `App.test.js` for testing your submission, please make sure to include `testid`(exactly same as mentioned in the test) of the elements to get maximum score and run you test locally and submit `App.js` file in the below submission form once you are done with the development.**
<br>
# Demo Video
<br>
<iframe width="560" height="315" src="https://www.youtube.com/embed/HgnXDH8eJVc" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
<br>
# Create Entry "/entry"
**[Request]**
<br>
```
{
  note: "foobar",
  amount: 10.00,
  type: 1,
  timestamp: "Tue Jan 05 2021 14:36:56 GMT+0530 (India Standard Time)"
}
```
<br>
**[Response]**
<br>
```
{
    message: 'entry created'
}
```
<br>
# Get Entries "/entry"
**[Response]**
<br>
```
[
 ...
  {
    note: "foobar",
    amount: 10.00,
    type: 1,
    timestamp: "Tue Jan 05 2021 14:36:56 GMT+0530 (India Standard Time)"
  },
 ...
]
```

<br>
Test Instruction:
<br>

* You will be given 2 hours to complete the test.
* Please avoid adding any new dependency to project.
* Make sure to follow all the instruction properly to get the maximum score.
* You must have Node, Yarn and Code Editor of your choice install on your system to continue with the test.
* Use Help Button, for any query related to the problem statement.
* Once the test is completed, please make sure to submit `App.js`

<br>

All the best!


  [1]: https://cdn.skillenza.com/files/4aff119d-858e-493c-9ec9-5e6310ff96ce/cashbook.zip
  [2]: https://cdn.skillenza.com/files/13c9cdd0-02d2-4796-ad8f-012d2d428089/0.png
  [3]: https://cdn.skillenza.com/files/a43eabc8-9873-49c3-ab72-dea083ad45a0/1.png
  [4]: https://cdn.skillenza.com/files/cde71b0b-1a28-4b75-9c7b-c755465150ea/2.png
  [5]: https://cdn.skillenza.com/files/21847580-4e7e-4d22-84ce-b3e60bb1e0b8/3.png
