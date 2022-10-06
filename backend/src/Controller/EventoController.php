<?php

namespace App\Controller;

use App\Entity\Evento;
use App\Form\EventoType;
use App\Repository\EventoRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\{Response, JsonResponse};
use Symfony\Component\Routing\Annotation\Route;

#[Route('/evento')]
class EventoController extends AbstractController
{
    #[Route('/', name: 'app_evento_index', methods: ['GET'])]
    public function index(EventoRepository $eventoRepository): JsonResponse
    {
        // return $this->json([
        //     'eventos' => $eventoRepository->findAll(),
        // ]);
        return new JsonResponse([
            'eventos' => $eventoRepository->findAll(),
        ],Response::HTTP_OK);
    }

    #[Route('/new', name: 'app_evento_new', methods: ['GET', 'POST'])]
    public function new(Request $request, EventoRepository $eventoRepository): Response
    {
        $evento = new Evento();
        $form = $this->createForm(EventoType::class, $evento);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $eventoRepository->save($evento, true);

            return $this->redirectToRoute('app_evento_index', [], Response::HTTP_SEE_OTHER);
        }

        return $this->renderForm('evento/new.html.twig', [
            'evento' => $evento,
            'form' => $form,
        ]);
    }

    #[Route('/{id}', name: 'app_evento_show', methods: ['GET'])]
    public function show(Evento $evento): Response
    {
        return $this->render('evento/show.html.twig', [
            'evento' => $evento,
        ]);
    }

    #[Route('/{id}/edit', name: 'app_evento_edit', methods: ['GET', 'POST'])]
    public function edit(Request $request, Evento $evento, EventoRepository $eventoRepository): Response
    {
        $form = $this->createForm(EventoType::class, $evento);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $eventoRepository->save($evento, true);

            return $this->redirectToRoute('app_evento_index', [], Response::HTTP_SEE_OTHER);
        }

        return $this->renderForm('evento/edit.html.twig', [
            'evento' => $evento,
            'form' => $form,
        ]);
    }

    #[Route('/{id}', name: 'app_evento_delete', methods: ['POST'])]
    public function delete(Request $request, Evento $evento, EventoRepository $eventoRepository): Response
    {
        if ($this->isCsrfTokenValid('delete'.$evento->getId(), $request->request->get('_token'))) {
            $eventoRepository->remove($evento, true);
        }

        return $this->redirectToRoute('app_evento_index', [], Response::HTTP_SEE_OTHER);
    }
}
