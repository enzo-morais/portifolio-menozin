import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const { name, email, discord, message } = await request.json();

    // Validação básica
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Todos os campos são obrigatórios" },
        { status: 400 }
      );
    }

    // Validação de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Email inválido" },
        { status: 400 }
      );
    }

    const webhookUrl = process.env.DISCORD_WEBHOOK_URL;

    if (!webhookUrl) {
      console.error("DISCORD_WEBHOOK_URL não configurado");
      return NextResponse.json(
        { error: "Webhook não configurado" },
        { status: 500 }
      );
    }

    // Criar embed rico para o Discord
    const fields = [
      {
        name: "👤 Nome",
        value: name,
        inline: true
      },
      {
        name: "📧 Email",
        value: email,
        inline: true
      }
    ];

    // Adicionar Discord se fornecido
    if (discord && discord.trim()) {
      fields.push({
        name: "💬 Discord",
        value: discord,
        inline: true
      });
    }

    // Adicionar mensagem
    fields.push({
      name: "📝 Mensagem",
      value: message.length > 1024 ? message.substring(0, 1021) + "..." : message,
      inline: false
    });

    const embed = {
      title: "📬 Nova Mensagem de Contato",
      color: 0x6B86A8, // Cor accent do site
      fields,
      timestamp: new Date().toISOString(),
      footer: {
        text: "Portfólio Enzo Morais"
      }
    };

    // Enviar para o Discord
    const discordResponse = await fetch(webhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        embeds: [embed]
      }),
    });

    if (!discordResponse.ok) {
      const errorText = await discordResponse.text();
      console.error("Erro ao enviar para Discord:", errorText);
      return NextResponse.json(
        { error: "Erro ao enviar mensagem" },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { success: true, message: "Mensagem enviada com sucesso!" },
      { status: 200 }
    );

  } catch (error) {
    console.error("Erro no servidor:", error);
    return NextResponse.json(
      { error: "Erro interno do servidor" },
      { status: 500 }
    );
  }
}
