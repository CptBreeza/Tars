我们在 GitHub 上向一个 repository 提交 pull request 时，review 之间以及 author 和 review 之间经常会出现意见不一致的情况。
我想开发一个 GitHub 机器人，比如说它叫做 Tars，当出现意见不一致的情况时，可以在 comment 中 @Tars，它就会：
1. 把该 pull request 相关的代码以及当前 comment 讨论串提交给 OpenAI 的 API（模型可以使用 GPT-4 Turbo）
2. 调用 OpenAI 的 API 要求它对讨论串中的个观点进行评论，评论的维度有：
  1. 方案的优点与缺点
  2. 合理性
  3. 实现难易程度
3. 向讨论串增加一个回复，内容就是步骤 2 中 OpenAI API 返回的内容
现在请你分步骤实现这个 GitHub 机器人，步骤如下：
1. 叙述实现前需要做的准备工作。例如：准备 OpenAI API 的 token，GitHub API 的 token 等等
2. 我们的技术栈暂定为 TypeScript。请你给出我们可以使用哪些 SDK、第三方库
3. 告诉我应该怎样创建项目，并且实现主体业务逻辑代码
4. 告诉我如何部署这个机器人
你应该一个步骤一个步骤地回答我，每次只回答一个步骤，询问我的反馈，如果我不满意，你应该给出更好的回答，直到我满意之后再进行下一个步骤
