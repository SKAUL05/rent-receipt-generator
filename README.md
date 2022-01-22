# Rent Receipt Generator

[![GitHub license](https://img.shields.io/github/license/SKAUL05/rent-receipt-generator?logo=github)](https://github.com/SKAUL05/SKAUL05/blob/master/LICENSE) ![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/SKAUL05/rent-receipt-generator?logo=react)

### A [React](https://reactjs.org/) App to generate rent receipts online

![Form](https://raw.githubusercontent.com/SKAUL05/rent-receipt-generator/master/assets/rent_image.png)

> This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

> **Click [here](https://rent-receipt-generator.vercel.app/) for live demo.**

### How to run?

- Clone the repository : `git clone https://github.com/SKAUL05/rent-receipt-generator/`

- Run `yarn install`

- Run `npm run start`

- Open browser and go to `http://localhost:8080/`

## Contributing

[![GitHub issues](https://img.shields.io/github/issues/SKAUL05/rent-receipt-generator?logo=github)](https://github.com/SKAUL05/rent-receipt-generator/issues) ![GitHub pull requests](https://img.shields.io/github/issues-pr/SKAUL05/rent-receipt-generator?color=blue&logo=github)

**1.** Fork [this](https://github.com/SKAUL05/rent-receipt-generator/) repository.
Click on the <a href="https://github.com/SKAUL05/rent-receipt-generator/"><img src="https://img.icons8.com/ios/24/000000/code-fork.png"></a> symbol at the top right corner.

**2.** Clone the forked repository.

```bash
git clone https://github.com/<your-github-username>/rent-receipt-generator
```

**3.** Navigate to the project directory.

```bash
cd receipt-generator
```

**4.** Create a new branch.

```bash
git checkout -b <your_branch_name>
```

**5.** Make changes in source code.

**6.** Stage your changes and commit

```bash
#Add changes to Index
git add .

#Commit to the local repo
git commit -m "<your_commit_message>"
```

> CAUTION: Synch up your local repo with [original repo](https://github.com/SKAUL05/rent-receipt-generator) (Upstream) before pushing your commits.
> This avoids unnecessary conflicts during the merge.

> NOTE: You can do so by adding a [remote handler](https://www.atlassian.com/de/git/tutorials/syncing) reference to the original repo and pull the changes from the respective branch.
> Resolve the [merge-conflicts](https://www.atlassian.com/de/git/tutorials/using-branches/merge-conflicts) if any.

> ```bash
> #Add upstream repo
> git remote add upstream https://github.com/SKAUL05/rent-receipt-generator.git
>
> #Disable accidental push to the upstream
> git remote set-url --push upstream DISABLE
>
> #List the remote repo and fetch references
> git remote -v && git fetch upstream
>
> #Check for any new commits in the upstream branch
> git log HEAD..upstream/master #No output indicates, upstream has not moved ahead
>
> #See the patch difference between local and upstream branch
> git diff -p HEAD..upstream/master
>
> ```

> CAUTION: If the upstream has moved ahead, rebase your commit and resolve conflicts if any. [Skip otherwise]
>
> ```bash
> git rebase upstream/master
> ```

**7.** Push your local commits to the remote repo.

```bash
git push -u origin <your_branch_name>
```

**8.** Create a [PR](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request) !

**9.** **Congratulations!** Sit and relax, you've made your contribution to [Rent Receipt Generator](https://rent-receipt-generator.vercel.app/) project.

### More about HRA

> Click [here](https://cleartax.in/s/hra-house-rent-allowance) to know more in detail about HRA

### Thanks!

Glad to see here! Show some love by [starring](https://github.com/SKAUL05/rent-receipt-generator) this repository.

[![Sarath Kaul](https://img.shields.io/badge/Author-@SKAUL05-teal.svg?colorA=grey&colorB=blue&logo=github)](https://github.com/SKAUL05/)
