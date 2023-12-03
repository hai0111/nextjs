import { Octokit } from 'octokit'

const auth = process.env['GIT_HUB_TOKEN'] || ''

const octokit = new Octokit({
	auth,
})

const getNumOfCommits = async () => {
	try {
		let num = 0
		const { data: commits } = await octokit.request(
			'GET /repos/hai0111/nextjs-cicd/commits',
			{
				owner: 'hai0111',
				repo: 'nextjs-cicd',
				headers: {
					'X-GitHub-Api-Version': '2022-11-28',
				},
			}
		)
		return commits.length
	} catch (error) {
		console.log(error)
		return 0
	}
}

export async function GET(req: Request) {
	const commits = await getNumOfCommits()
	return new Response(
		JSON.stringify({
			commits,
		}),
		{
			status: 201,
		}
	)
}
